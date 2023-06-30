import { type NextPage } from "next";
import { ControlPanel } from "~/components/organisms/ControlPanel";

const Dashboard: NextPage = () => {
  return (
    <main className="relative flex min-h-screen bg-zinc-50">
      <ControlPanel />
      <div className="w-fill grow">a</div>
    </main>
  );
};

export default Dashboard;
