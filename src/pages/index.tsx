import { GetServerSideProps } from 'next';
import Head from 'next/head';
import styles from './home.module.scss'

import Image from 'next/image';
import img from '../../public/images/avatar.svg'
import { SubscribeButton } from '../Components/SubscribeButton';
import stripe from 'stripe';

export default function Home() {

  return (
    <>
      <Head>
        <title>Anbra News</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Seja bem vindo(a)</span>
          <h1>Artigos e tutoriais sobre <span>programação.</span></h1>
          <p>Tenha acesso a todas publicações <br />
            <span>por $1.99 mês</span>
          </p>
          <SubscribeButton />
        </section>
        <Image src={img} alt="Girl" />
      </main>

    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1JMz0eLahqNxUOrfvfVYTFrV', {
    expand: ['product']
  })
  const product = {
    priceId: price.id,
    amount: price.unit_amount / 100,
  };
  return {
    props: {
      nome: 'Ocnarb'
    }
  }
}