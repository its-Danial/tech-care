import DiagnosisHistory from "@/components/section/DiagnosisHistory";
import Patients from "@/components/section/Patients";
import $fetch from "@/lib/fetch";
import { Patient } from "@/lib/types";

export default async function Home() {
  const data: Patient[] = await (
    await $fetch("https://fedskillstest.coalitiontechnologies.workers.dev")
  ).json();

  const jessicaTaylor = data.find(
    (patient) => patient.name === "Jessica Taylor",
  );

  console.log(jessicaTaylor);

  return (
    <main className="mt-[18px] grid grid-cols-4 gap-8">
      <Patients patients={data} className="mt-[18px]" />
      <DiagnosisHistory
        className="col-span-2 mt-[18px]"
        patient={jessicaTaylor as Patient}
      />
    </main>
  );
}
