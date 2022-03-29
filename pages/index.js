import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import Image from 'next/image'
import { Form } from '../components/kontakt-form'
export default function Home() {
  return(
    <>
      <Head>
        <title>Primusweb - hjemmesider til overkommelige priser</title>
      </Head>
      <Layout>
        <section className='h-screen w-screen flex justify-center flex-col items-center'>
          <h1 className='text-5xl lg:text-8xl font-black uppercase text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 px-10 mb-2'>HJEMMESIDER MED GARANTI</h1>
          <h2 className='text-white px-10 font-200 text-center mb-10'>Leder du efter hjemmesider til overkommelige priser, så er vi de retter. Vi i PrimusWeb stiller garanti for alt det vi laver og stiller derfor fuld refundering hvis du er utilfreds med dit produkt.</h2>
          <Link href="/#kontakt"><div className='cursor-pointer rounded-md px-4 py-2 lg:px-10 lg:text-2xl lg:py-4 uppercase bg-gradient-to-r from-pink-500 to-violet-500 font-black text-white'>Kontakt os</div></Link>
        </section>
        <section className='h-screen w-full flex flex-col lg:flex-row items-start px-4'>
          <div className='w-full lg:w-1/2 relative h-1/3 overflow-hidden lg:h-full lg:order-2'><Image src="/om-os.jpg" layout="fill" objectFit='contain'/></div>
          <div className='w-full flex flex-col lg:w-1/2 lg:order-1 lg:m-auto lg:p-4'>
            <h2 className='text-4xl lg:text-6xl font-black uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-10'>Hvem er vi?</h2>
            <p className='leading-6 mb-4 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci odio, tincidunt vitae scelerisque varius, mollis nec massa. In mi nisi, rhoncus sit amet porta vel, aliquet a neque. Integer et nisl et libero dignissim aliquam dictum at metus. Integer sollicitudin tincidunt libero, id luctus quam. Donec ut arcu tristique nulla mattis sollicitudin.</p>
            <Link href="/om-os"><div className='cursor-pointer rounded-md px-4 py-2 lg:px-10 lg:text-2xl lg:py-4 uppercase bg-gradient-to-r from-pink-500 to-violet-500 font-black text-white w-auto text-center max-w-[10rem] lg:max-w-[15rem]'>Læs mere</div></Link>
          </div>
        </section>
        <section className='h-screen gap-x-8 px-8 w-screen flex flex-col lg:px-4 mt-1/2 text-center lg:grid grid-cols-2 grid-rows-2 mb-40'>
          <h2 className='col-span-2 text-4xl lg:text-6xl font-black self-center uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-10'>Vores services</h2>
          <div className="lg:h-4/5 lg:w-4/5 lg:mx-auto self-center lg:after:left-0 row-start-2 mt-4 lg:mt-0 w-full flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-xl px-4 py-8"><h4 className="text-2xl lg:text-4xl font-black ">Online visitkort</h4><h5 className="relative text-xl lg:text-2xl font-semibold after:absolute after:w-16 after:h-2 after:mt-1 after:left-[calc(50%-2rem)] after:rounded-xl after:block after:bg-white">Når du skal gå online</h5><p className="text-center mt-4">Hvis du gerne vil gøre din virksomhed synlig på nettet og samtidig fortælle om din virksomhed, så er kontaktsiden det perfekte til dig.</p></div>
          <div className="lg:h-4/5 lg:w-4/5 self-center row-start-2 mt-8 lg:mt-0 w-full flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-xl px-4 py-8"><h4 className="text-2xl lg:text-4xl font-black">Online visitkort</h4><h5 className="relative text-xl lg:text-2xl font-semibold after:absolute after:w-16 after:h-2 after:mt-1 after:left-[calc(50%-2rem)] after:rounded-xl after:block after:bg-white">Når du skal gå online</h5><p className="text-center mt-4">Hvis du gerne vil gøre din virksomhed synlig på nettet og samtidig fortælle om din virksomhed, så er kontaktsiden det perfekte til dig.</p></div>
        </section>
        <section>
        <h2 className='col-span-2 text-4xl text-center mb-4 lg:text-6xl font-black self-center uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Kontakt os</h2>
          <Form/>
        </section>
      </Layout>
    </>
  )
}
