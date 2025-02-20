import styles from "../styles/Subintro.module.css"

export default function Intro() {
  return (
    <section className={styles.subintro}>
      <h2>Decorators are typically used in:</h2>
        <ul className = {styles.typicalList}>
            <li>Class definitions</li>
            <li>Properties</li>
            <li>Methods</li>
            <li>Accessors</li>
            <li>Parameters</li>
        </ul>
    </section>
  )
}