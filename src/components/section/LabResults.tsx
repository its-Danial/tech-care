import Card from "@/components/ui/card/Card";
import LabResultListItem from "@/components/ui/list/LabResultListItem";

type LabResultsProps = {
  patientLabResults: string[];
};

export default function LabResults({ patientLabResults }: LabResultsProps) {
  return (
    <Card>
      <section className="h-[296px] max-w-[367px] p-5">
        <header className="mb-4">
          <h1 className="card-title-24pt">Lab Results</h1>
        </header>
        <div className="scroll-bar h-[210px] overflow-y-auto">
          <ul className="mr-1 space-y-[5px]">
            {[...patientLabResults, ...patientLabResults].map(
              (result, index) => (
                <LabResultListItem key={result + index} result={result} />
              ),
            )}
          </ul>
        </div>
      </section>
    </Card>
  );
}
