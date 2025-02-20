import styles from "../styles/Summary.module.css"

export default function Summary() {
  return (
    <section className={styles.summary}>
      <h2>Summary</h2>
      <p>
        Decorators in TypeScript are an experimental feature. They provide a powerful way to modify or enhance classes
        and their members, but it is important to note that the implementation may change in future versions.
      </p>
    </section>
  )
}