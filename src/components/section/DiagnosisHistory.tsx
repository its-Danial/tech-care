import Card from "@/components/ui/card/Card";
import { Patient } from "@/lib/types";
import BPChart from "./BPChart";

type DiagnosisHistoryProps = {
  className?: string;
  patient: Patient;
};

export default function DiagnosisHistory({
  className,
  patient,
}: DiagnosisHistoryProps) {
  return (
    <Card className={className}>
      <section className="p-5">
        <header className="mb-10">
          <h1 className="card-title-24pt">Diagnosis History</h1>
        </header>
        <BPChart diagnosisHistory={patient.diagnosis_history} />
      </section>
    </Card>
  );
}
