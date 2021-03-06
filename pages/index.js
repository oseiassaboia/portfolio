import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Oseias Saboia | Developer </title>
        <meta name="keywords" content="Oseias Saboia | Desenvolvedor" />
        <meta name="description" content="Desenvolvedor back-end e Front-end" />
      </Head>
      <div className={styles.app}>
        <Sidebar />
        <Main />
      </div>
    </>
  )
}

//  { }
