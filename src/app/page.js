import Head from "next/head"
import Header from "../app/components/Header"
import Intro from "../app/components/Intro"
import Content from "../app/components/Content"
import Summary from "../app/components/Summary"
import Footer from "../app/components/Footer"
import styles from "../app/styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TypeScript Decorators</title>
        <meta name="description" content="Learn about TypeScript decorators" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Intro />
        <Content />
        <Summary />
      </main>

      <Footer />
    </div>
  )
}
