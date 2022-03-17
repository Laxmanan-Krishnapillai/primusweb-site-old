import { Navbar } from '../components/navbar'
import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import { Form } from '../components/kontakt-form'
export default function Home() {
  return(
    <>
      <Head>
        <title></title>
      </Head>
      <Layout>
        <section className='h-screen w-screen flex justify-center flex-col items-center'>
          <h1 className='text-5xl lg:text-9xl font-black uppercase text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 px-10 mb-10'>LAD OS LAVE DIG EN VANVITTIG HJEMMESIDE!</h1>
          <Link href="/#kontakt"><div className='btn-primary'> Kontakt os</div></Link>
        </section>
        <section className='h-screen w-screen flex justify-center flex-col items-center'>
          <h2 className='text-4xl font-black uppercase text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 px-10 mb-10'>Hvem er vi?</h2>
          <Link href="/om-os"><div className='btn-primary'>Læs mere</div></Link>
        </section>
        <section><h2>Vores services</h2></section>
        <section><Form/></section>
      </Layout>
    </>
  )
}
