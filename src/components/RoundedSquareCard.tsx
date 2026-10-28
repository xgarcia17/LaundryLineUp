import type { ReactNode } from "react";
import styles from "./RoundedSquareCard.module.css";

type RoundedSquareCardProps = {
  children?: ReactNode;
  className?: string;
};

export default function RoundedSquareCard({
  children,
  className,
}: RoundedSquareCardProps) {
  return (
    <div className={`${styles.squareContainer} ${className ?? ""}`}>
      {children}
    </div>
  );
}
