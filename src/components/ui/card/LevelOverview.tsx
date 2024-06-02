import clsx from "clsx";
import Image from "next/image";

import styles from "./card.module.css";

type LevelOverview = {
  level: string;
  label: string;
  value: number;
};

export default function LevelOverview({ label, level, value }: LevelOverview) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-1">
        <span
          className={clsx(
            "h-[14px] w-[14px] rounded-full border border-solid border-[--unnamed-color-ffffff]",
            label === "Systolic" ? "bg-[#E66FD2]" : "bg-[#8C6FE6]",
          )}
        />
        <h3 className={styles["overview-header"]}>{label}</h3>
      </div>
      <span className={styles["overview-num"]}>{value}</span>
      <div className="flex space-x-2">
        <Image
          src={`/assets/icons/${label === "Systolic" ? "ArrowUp" : "ArrowDown"}.svg`}
          alt="arrow up"
          height="5"
          width="10"
        />
        <span className={styles["overview-levels"]}>{level} than Average</span>
      </div>
    </div>
  );
}
