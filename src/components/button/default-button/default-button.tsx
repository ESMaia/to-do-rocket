import styles from "./default-button.module.css";
import { IoIosAddCircleOutline as AddIcon } from "react-icons/io";
interface ButtonProps {
  label?: string;
  onClick: () => void;
  className?: string;
}

export function DefaultButton({
  label = "Criar",
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${className}`}
      type="button"
      onClick={onClick}
    >
      <span>{label}</span>
      <AddIcon />
    </button>
  );
}
