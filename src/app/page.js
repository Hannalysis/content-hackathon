import Head from "next/head"
import Header from "../app/components/Header"
import Intro from "../app/components/Intro"
import Subintro from "../app/components/Subintro"
import Content from "../app/components/Content"
import Summary from "../app/components/Summary"
import Footer from "../app/components/Footer"
import Setup from "../app/components/Setup"
import styles from "../app/styles/Home.module.css"

const accordionItems = [
  {
    title: '> Click here for setup instructions <',
    content:  (
      <ul className = {styles.setupList}>
        <li>npm init-y</li>
        <li>npm install typescript --save-dev</li>
        <li>npm install reflect-metadata --save</li>
        <li>npm install @types/reflect-metadata --save-dev (optional)</li>
        <li>npx tsc --init (Alongside usual compiler setup, ensure module: Common JS is uncommented for running with Node.js)</li>
        <li>Also ensure to uncomment experimentalDecorators: true and emitDecoratorMetadata: true</li>
        <li>Add a src folder where your ts files will reside</li>
        <li>npx tsc (creates a dist folder (where the code is compiled to in js format))</li>
        <li>node dist/nameoftsfile.js</li>
      </ul>
    )
  }
];

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
        <Subintro />
        <Setup items = {accordionItems} />
        <Content />
        <Summary />
      </main>

      <Footer />
    </div>
  )
}
