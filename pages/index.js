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
        <img src="/boob.jpg" alt="Pilt"  />
        <Header title="Anni Pilvar" />
        <Header title="Imetamisnõustaja koduvisiidid Tartus" />


        <p className="description">
          Kontakt: 53447089 
        </p>
        <p className="description">
          E-mail: anni.pilvar@gmail.com
        </p>
        <p className="description">
        Individuaalne imetamisnõustamine rasedatele ja imetavatele emadele.
        Koduvisiidid Tartus, kokkuleppel Tartumaal.
        Loenguid ja vestlusringe võimalik tellida üle Eesti.
        </p>
        <p className="description">
          Rohkem infot Facebookis: <a href="https://www.facebook.com/annipilvarimetamisnoustaja">Anni Pilvar Imetamisnõustaja</a> 
        </p>
      </main>

      <Footer />
    </div>
  )
}
