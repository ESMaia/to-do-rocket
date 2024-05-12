import styles from "./table-header.module.css";

interface TableHeaderProps {
  doneItens: number;
  allItens: number;
}

export function TableHeader({ allItens, doneItens }: TableHeaderProps) {
  return (
    <div className={styles.container}>
      <p className={styles.created}>
        Tarefas criadas<span className={styles.numberMark}>{allItens}</span>
      </p>

      <p className={styles.done}>
        Concluídas
        <span className={styles.numberMark}>
          {allItens > 0 ? (
            <>
              {doneItens} de {allItens}
            </>
          ) : (
            <>0</>
          )}
        </span>
      </p>
    </div>
  );
}
