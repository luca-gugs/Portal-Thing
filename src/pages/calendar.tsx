import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Calendar from "~/components/organisms/Calendar";
import { ControlPanel } from "~/components/organisms/ControlPanel";
import { CalendarProvider } from "../contexts/calendarContext";
const CalendarPage: NextPage = () => {
  const user = useUser();

  return (
    <main className="relative flex min-h-screen flex-col bg-zinc-50 lg:flex-row">
      <ControlPanel />
      <div className="w-fill flex grow flex-col p-12">
        <CalendarProvider>
          <Calendar />
        </CalendarProvider>
      </div>
    </main>
  );
};

export default CalendarPage;
