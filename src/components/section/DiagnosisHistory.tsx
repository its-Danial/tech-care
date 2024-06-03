import Card from "@/components/ui/card/Card";
import DiagnosisHistoryCard from "@/components/ui/card/DiagnosisHistoryCard";
import { DiagnosisHistory as TypeDiagnosisHistory } from "@/lib/types";
import BPChart from "./BPChart";

type DiagnosisHistoryProps = {
  className?: string;
  patientHistory: TypeDiagnosisHistory[];
};

export default function DiagnosisHistory({
  className,
  patientHistory,
}: DiagnosisHistoryProps) {
  const respiratory = patientHistory[0].respiratory_rate;
  const temperature = patientHistory[0].temperature;
  const heartRate = patientHistory[0].heart_rate;

  return (
    <Card className={className}>
      <section className="max-h-[673px] max-w-[766px] p-5">
        <header className="mb-10">
          <h1 className="card-title-24pt">Diagnosis History</h1>
        </header>
        <BPChart diagnosisHistory={patientHistory} />
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
