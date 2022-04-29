import { Navbar } from "../components/navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
export default function OmOs() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <section className="h-screen w-screen flex justify-center flex-col items-center">
        <div className="">
          <Image
            src="/images/om-os.jpg"
            alt="Billeder af PrimusWeb teamet"
            width={1200}
            height={1080}
          />
        </div>
        <h1 className="text-5xl lg:text-8xl font-black uppercase text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 px-10 mb-2">
          Om os
        </h1>
        <h2 className="text-white px-4 font-200 text-center mb-10 text-lg">
          Vi er en gruppe af unge, som har været med i udviklingen af
          kommunikationsteknikker i de sidste år.
        </h2>
        <Link href="/#kontakt">
          <div className="cursor-pointer rounded-md px-4 py-2 lg:px-10 lg:text-2xl lg:py-4 uppercase bg-gradient-to-r from-pink-500 to-violet-500 font-black text-white">
            Kontakt os
          </div>
        </Link>
      </section>
    </motion.div>
  );
}
