import styles from "../styles/Content.module.css"


export default function Content() {
  const catSteps = [
    "First we are console logging our newly created instance of a Cat (Class); it's features (properties) are simply that fur is long, and it's eyes are green.",
    "We want to create a new Cat with a collar on, so we'll need to use a decorator.",
    "To ready the decorator, we use the '@' and the name only, as the decorator will execute at runtime: Therefore, we'll place @Collar above the Cat Class definition.",
    "When we compile the typescript and run the script again, our newly created Cat now has a collar property.",
    "In summary: Every instance of a Cat will now have a collar by default as the decorator resides on the class defintion.",
  ]

  const calcSteps = [
    "In this example, our add function from the Calculator class is decorated with the @log function, so when we run our script, a log will display for the function name and arguments, in addition to the result.",
    "We want to be able to use that log feature on the subtraction function that is called, so we'll assign @log above the subtraction function, then compile and re-run.",
    "In summary: As these decorators can sit above any method; this allows for flexibility without having to edit the original functions within the class itself."
  ]


  return (
    <section className={styles.content}>
      <div className={styles.grid}>
        <div className={styles.steps}>
          <h3>Class Example</h3>
          <h4>Decorator outside the Class</h4>
          <ul>
            {catSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
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
          <ul>
            {calcSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
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