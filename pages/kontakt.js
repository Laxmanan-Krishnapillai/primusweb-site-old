import { Form } from "../components/kontakt-form";
import Layout from "../components/layout";
export default function Kontakt() {
  return(
    <>
    <Layout>
      <div className="w-full mt-[10vh] flex flex-col min-h-[80vh] items-center justify-center">
        <h1 className="text-5xl lg:text-8xl font-black uppercase text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 px-10 mb-2">Kontakt os</h1>
        <Form classNames="mt-12 mb-0" />
      </div>
    </Layout>
    </>
  )
}