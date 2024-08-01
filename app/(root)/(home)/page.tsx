import MeetingTypeList from "@/components/meetingTypeList";
import Time from "@/components/Time";

type Props = {};

function Home({}: Props) {
  const now = new Date();
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11 ">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:00 PM
          </h2>

          <div className="flex flex-col gap-2">
            <Time />
            <p className="text-lg font-medium text-sky-1 lg:text-xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
}

export default Home;
