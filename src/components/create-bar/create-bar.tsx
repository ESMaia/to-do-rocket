import { useState } from "react";
import styles from "./create-bar.module.css";
import { Button } from "../button";

interface InputProps {
  onCreate: (value: string) => void;
}

export function CreateBar({ onCreate }: InputProps) {
  const [text, setText] = useState("");
  return (
    <div className={styles.bar}>
      <input
        className={styles.input}
        placeholder={"Adicione uma nova tarefa"}
        type={"text"}
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
      <Button
        className={styles.button}
        label="Criar"
        type="default"
        onClick={() => {
          onCreate(text);
          setText("");
        }}
      />
    </div>
  );
}
