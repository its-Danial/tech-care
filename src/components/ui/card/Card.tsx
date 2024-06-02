import clsx from "clsx";
import styles from "./card.module.css";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return <div className={clsx(styles.card, className)}>{children}</div>;
}
