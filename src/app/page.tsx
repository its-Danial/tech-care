import DiagnosisHistory from "@/components/section/DiagnosisHistory";
import DiagnosticList from "@/components/section/DiagnosticList";
import Patients from "@/components/section/Patients";
import UserInfo from "@/components/section/UserInfo";
import $fetch from "@/lib/fetch";
import { extractUserInfo } from "@/lib/functions";
import {
  Patient,
  DiagnosisHistory as TypeDiagnosisHistory,
  DiagnosticList as TypeDiagnosticList,
} from "@/lib/types";

export default async function Home() {
  const data: Patient[] = await (
    await $fetch("https://fedskillstest.coalitiontechnologies.workers.dev")
  ).json();

  const jessicaTaylor = data.find(
    (patient) => patient.name === "Jessica Taylor",
  );

  const useInfo = extractUserInfo(jessicaTaylor as Patient);

  return (
    <main className="mt-[18px] grid grid-cols-4 gap-8">
      <Patients patients={data} className="mt-[18px]" />

      <div className="col-span-2 mt-[18px] flex flex-col space-y-8">
        <DiagnosisHistory
          patientHistory={
            jessicaTaylor?.diagnosis_history as TypeDiagnosisHistory[]
          }
        />
        <DiagnosticList
          patientDiagnostic={
            jessicaTaylor?.diagnostic_list as TypeDiagnosticList[]
          }
        />
      </div>
      <UserInfo user={useInfo as Patient} />
    </main>
  );
}
