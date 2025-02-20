import styles from "../styles/Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>TypeScript <span className = {styles.decorate}>Decorators</span></h1>
    </header>
  )
}