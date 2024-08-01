"use client";
import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

type Props = {};

function MeetingSetup({
  setisSetupComplete,
}: {
  setisSetupComplete: (value: boolean) => void;
}) {
  const [isMicCamToggle, setisMicCamToggle] = useState(false);
  const call = useCall();

  if (!call) {
    throw new Error("usecall must be within streamcall component");
  }
  useEffect(() => {
    if (isMicCamToggle) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggle, call?.camera, call?.microphone]);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex h-16 justify-center items-center gap-3">
        <label
          htmlFor=""
          className="flex items-center justify-center gap-2 font-medium"
        >
          <input
            type="checkbox"
            name="mic"
            id="mic"
            checked={isMicCamToggle}
            onChange={(e) => setisMicCamToggle(e.target.checked)}
          />
          Connect Mic and Cam
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-green-500 px-4 py-2.5"
        onClick={() => {
          call.join();
          setisSetupComplete(true);
        }}
      >
        Join Meet
      </Button>
    </div>
  );
}

export default MeetingSetup;
