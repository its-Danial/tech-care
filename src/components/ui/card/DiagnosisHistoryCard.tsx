import Image from "next/image";
import styles from "./card.module.css";
import clsx from "clsx";

type DiagnosisHistoryCardProps = {
  label: string;
  measureUnit: string;
  value: number;
  levels: string;
  icon: string;
  color: string;
};

export default function DiagnosisHistoryCard({
  label,
  measureUnit,
  value,
  levels,
  icon,
  color,
}: DiagnosisHistoryCardProps) {
  return (
    <div
      className={"h-[242px] w-[228px] rounded-xl p-4"}
      style={{ backgroundColor: color }}
    >
      <Image
        src={`/assets/icons/${icon}.svg`}
        alt={`${levels} icon`}
        height="96"
        width="96"
        className="mb-4"
      />
      <h4 className={styles["dh-card-label"]}>{label}</h4>
      <div
        className={clsx(styles["dh-card-value"], "mb-[17px]")}
      >{`${value} ${measureUnit}`}</div>
      <div
        className={clsx(
          styles["dh-card-level"],
          label === "Heart Rate" && "flex items-center space-x-2",
        )}
      >
        {label === "Heart Rate" && (
          <Image
            src={`/assets/icons/ArrowDown.svg`}
            alt={`${levels} icon`}
            height="5"
            width="10"
          />
        )}
        <span>{levels}</span>
      </div>
    </div>
  );
}
