import { useState } from "react";
import { Button } from "../button";
import { IoIosCheckmark as CheckIcon } from "react-icons/io";
import styles from "./todo-item.module.css";

interface TodoItem {
  description: string;
  id: string;
  done: boolean;
}

interface TodoProps {
  item: TodoItem;
  onDelete: (id: string) => void;
  onChange: (id: string) => void;
}

export function TodoItem({ item, onDelete, onChange }: TodoProps) {
  const [clicked, setClicked] = useState(false);
  return (
    <div key={item.id} className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          className={`${styles.input} ${clicked && styles.inputChecked}`}
          type="radio"
          id={item.id}
          checked={clicked}
          onClick={() => {
            setClicked((click) => !click);
          }}
          onChange={() => {
            onChange(item.id);
          }}
        />
        <CheckIcon
          className={`${styles.icon} ${clicked && styles.iconChecked}`}
        />
      </div>
      <label
        className={`${styles.label} ${clicked && styles.labelChecked}`}
        htmlFor={item.id}
      >
        {item.description}
      </label>
      <Button
        type={"icon"}
        onClick={() => {
          onDelete(item.id);
        }}
      />
    </div>
  );
}
