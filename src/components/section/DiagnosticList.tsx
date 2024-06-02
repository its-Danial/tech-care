import { DiagnosticList as TypeDiagnosticList } from "@/lib/types";
import Card from "@/components/ui/card/Card";
import clsx from "clsx";

type DiagnosticProps = {
  patientDiagnostic: TypeDiagnosticList[];
};

export default function DiagnosticList({ patientDiagnostic }: DiagnosticProps) {
  return (
    <Card>
      <section className="h-[349px] p-5">
        <header className="mb-10">
          <h1 className="card-title-24pt">Diagnostic List</h1>
        </header>

        <div className="h-[238px]">
          <table className="w-full text-left">
            <thead className="mb-[10px] flex w-full rounded-3xl bg-[#F6F7F8]">
              <tr className="body-emphasized-14pt flex w-full px-4 py-[15px]">
                <th className="w-2/5">Problems/Diagnosis</th>
                <th className="w-3/5">Description</th>
                <th className="w-1/5">Status</th>
              </tr>
            </thead>
            <tbody
              className="scroll-bar flex w-full flex-col items-center justify-between space-y-[7px] overflow-y-scroll"
              style={{ height: "177px" }}
            >
              {patientDiagnostic.map((diagnostic, index) => (
                <tr
                  key={diagnostic.name}
                  className={clsx(
                    "body-secondary-info-14pt flex w-full text-wrap px-4 py-[15px]",
                    index !== patientDiagnostic.length - 1 &&
                      "border-b border-solid border-[#F6F7F8]",
                  )}
                >
                  <td className="w-2/5">{diagnostic.name}</td>
                  <td className="w-3/5">{diagnostic.description}</td>
                  <td className="w-1/5">{diagnostic.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Card>
  );
}
