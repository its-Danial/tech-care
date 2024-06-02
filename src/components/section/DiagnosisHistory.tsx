import Card from "@/components/ui/card/Card";
import { Patient } from "@/lib/types";
import BPChart from "./BPChart";
import DiagnosisHistoryCard from "@/components/ui/card/DiagnosisHistoryCard";

type DiagnosisHistoryProps = {
  className?: string;
  patient: Patient;
};

export default function DiagnosisHistory({
  className,
  patient,
}: DiagnosisHistoryProps) {
  const staticHistory = patient.diagnosis_history[0];

  const respiratory = staticHistory.respiratory_rate;

  const temperature = staticHistory.temperature;

  const heartRate = staticHistory.heart_rate;

  return (
    <Card className={className}>
      <section className="p-5">
        <header className="mb-10">
          <h1 className="card-title-24pt">Diagnosis History</h1>
        </header>
        <BPChart diagnosisHistory={patient.diagnosis_history} />
        <div className="mt-5 flex space-x-[21px]">
          <DiagnosisHistoryCard
            color="#E0F3FA"
            icon="respiratory rate"
            label="Respiratory Rate"
            measureUnit="bpm"
            levels={respiratory.levels}
            value={respiratory.value}
          />
          <DiagnosisHistoryCard
            color="#FFE6E9"
            icon="temperature"
            label="Temperature"
            measureUnit="°F"
            levels={temperature.levels}
            value={temperature.value}
          />
          <DiagnosisHistoryCard
            color="#FFE6F1"
            icon="HeartBPM"
            label="Heart Rate"
            measureUnit="bpm"
            levels={heartRate.levels}
            value={heartRate.value}
          />
        </div>
      </section>
    </Card>
  );
}
