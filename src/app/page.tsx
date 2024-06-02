import Patients from "@/components/section/Patients";
import $fetch from "@/lib/fetch";
import { Patient } from "@/lib/types";

export default async function Home() {
  const data: Patient[] = await (
    await $fetch("https://fedskillstest.coalitiontechnologies.workers.dev")
  ).json();

  console.log(data);

  return (
    <main className="mt-[18px] grid grid-cols-4 gap-8">
      <Patients patients={data} className="mt-[18px]" />
    </main>
  );
}
