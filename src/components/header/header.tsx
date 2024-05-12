import logo from "../../assets/todo-logo.png";

import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <img
        width={126}
        src={logo}
        alt="imagem de um foguete com o texto todo ao lado"
        title="To-Do Rocket"
      />
    </header>
  );
}
