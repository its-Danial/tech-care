import { Patient } from "@/lib/types";
import clsx from "clsx";
import Image from "next/image";

type PatientsListItemProps = {
  patient: Patient;
  active: boolean;
};

export default function PatientsListItem({
  patient,
  active,
}: PatientsListItemProps) {
  return (
    <li
      className={clsx(
        "flex h-20 w-full cursor-pointer flex-row items-center justify-between px-5 py-4 hover:bg-[--activestate_bg_2]",
        active && "bg-[--activestate_bg_2]",
      )}
    >
      <Image
        src={patient.profile_picture}
        alt={patient.name}
        height="48"
        width="48"
      />
      <div className="ml-3 flex h-full flex-1 flex-col justify-center space-y-1 text-xs">
        <span className="body-emphasized-14pt">{patient.name}</span>
        <span className="body-secondary-info-14pt">{`${patient.gender}, ${patient.age}`}</span>
      </div>
      <Image
        src="/assets/icons/more_horiz_FILL0_wght300_GRAD0_opsz24.svg"
        alt="more icon"
        height="4"
        width="18"
      />
    </li>
  );
}
