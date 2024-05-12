import styles from "./icon-button.module.css";
import { GoTrash as DeleteIcon } from "react-icons/go";
interface ButtonProps {
  onClick: () => void;
  className?: string;
}

export function IconButton({ onClick, className = "" }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${className}`}
      type="button"
      onClick={onClick}
    >
      <DeleteIcon />
    </button>
  );
}
