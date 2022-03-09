import { content } from '../tailwind.config'
import Link from 'next/link'
import Navbar from './components/navbar'
export default function Home() {
  return(
    <>
      <Navbar />
      <h1>Hello world</h1>
    </>
  )
}
