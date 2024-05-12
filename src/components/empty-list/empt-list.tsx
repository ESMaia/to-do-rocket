import styles from "./empty-list.module.css";
import clipboardIcon from "../../assets/clipboard.png";
export function EmptyList() {
  return (
    <div className={styles.content}>
      <img src={clipboardIcon} alt="Icone de prancheta com linhas" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
