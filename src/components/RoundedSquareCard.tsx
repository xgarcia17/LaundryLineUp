import type { MouseEventHandler, ReactNode } from "react";
import styles from "./RoundedSquareCard.module.css";

type RoundedSquareCardProps = {
  children: ReactNode;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function RoundedSquareCard({
  children,
  className,
  onClick,
}: RoundedSquareCardProps) {
  return (
    <button
      type="button"
      className={[styles.squareContainer, className].filter(Boolean).join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
