import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Slide from '../components/Slide'
import Cards from '../components/Cards'
import World_home from '../components/World_home'
import News_home from '../components/News_home'
import Entertainment_home from '../components/Entertainment_home'
import Gossip_home from '../components/Gossip_home'
import Footer from '../components/Footer'

import styles from '../styles/Home.module.css'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <Slide />
        <Cards />

        <Entertainment_home />

        <World_home />

        <Gossip_home />

        <News_home />
        
      </main>


      <Footer />




 
    </div>
  )
}
