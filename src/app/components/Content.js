import styles from "../styles/Content.module.css"

export default function Content() {
  const steps = [
    "Define a decorator function",
    "Use the @ symbol to apply the decorator",
    "Decorate classes, methods, properties, or parameters",
    "Compile with the --experimentalDecorators flag",
  ]

  return (
    <section className={styles.content}>
      <div className={styles.grid}>
        <div className={styles.steps}>
          <h3>Class Example</h3>
          <h4>Decorator outside the Class</h4>
          <ol>
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
        <div className={styles.video}>
          <h3>Cat Collar Decorator</h3>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/placeholder"
            title="TypeScript Decorators Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.steps}>
          <h3>Method Example</h3>
          <h4>Decorator inside the Class</h4>
          <p>Decorators can be used to modify or enhance the behavior of classes and their members.</p>
        </div>
        <div className={styles.video}>
          <h3>Log Operator Decorator</h3>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/placeholder2"
            title="Live Coding: TypeScript Decorators"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}