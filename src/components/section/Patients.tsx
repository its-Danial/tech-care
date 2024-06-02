import Card from "@/components/ui/card/Card";
import { Patient } from "@/lib/types";
import Image from "next/image";
import PatientsListItem from "../ui/list/PatientsListItem";

type PatientsProps = {
  className?: string;
  patients: Patient[];
};

export default function Patients({ className, patients }: PatientsProps) {
  return (
    <Card className={className}>
      <section className="flex max-h-[1054px] max-w-[367px] flex-col py-5">
        <header className="mb-10 flex w-full items-center justify-between px-5">
          <h1 className="card-title-24pt">Patients</h1>
          <Image
            src="/assets/icons/search_FILL0_wght300_GRAD0_opsz24.svg"
            alt="search icon"
            height="18"
            width="18"
          />
        </header>

        <ul className="scroll-bar flex-grow overflow-y-auto">
          {patients.map((patient) => (
            <PatientsListItem
              key={patient.phone_number}
              patient={patient}
              active={patient.name === "Jessica Taylor"}
            />
          ))}
        </ul>
      </section>
    </Card>
  );
}
