import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Anni Pilvar Imetamisnõustaja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Anni Pilvar Imetamisnõustaja" />
        <p className="description">
          Kontakt: 53447089
          Rohkem infot Facebookis: https://www.facebook.com/imetamisnoustamine/
        </p>
      </main>

      <Footer />
    </div>
  )
}
