import styles from "../styles/Intro.module.css"

export default function Intro() {
  return (
    <section className={styles.intro}>
      <h2>Introduction to TypeScript Decorators</h2>
      <p>
      TypeScript decorators are a feature that allows you to add extra information or behaviour to classes and their elements.
        They provide a way to include both annotations and meta-programming capabilities for class declarations and members.
      </p>
    </section>
  )
}