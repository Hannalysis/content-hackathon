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
          <video width="500" controls>
        <source src="/videos/Cat-ex-demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        </div>
        <div className={styles.steps}>
          <h3>Method Example</h3>
          <h4>Decorator inside the Class</h4>
          <p>Decorators can be used to modify or enhance the behavior of classes and their members.</p>
        </div>
        <div className={styles.video}>
          <h3>Log Operator Decorator</h3>
          <video width="500" controls>
        <source src="/videos/Calc-ex-demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        </div>
      </div>
    </section>
  )
}