import styles from "../styles/Intro.module.css"

export default function Intro() {
  return (
    <section className={styles.intro}>
      <h2>Introduction to TypeScript Decorators</h2>
      <p>
        TypeScript decorators are a feature that allows you to add annotations and modify classes and class members.
        They provide a way to add both annotations and a meta-programming syntax for class declarations and members.
      </p>
    </section>
  )
}