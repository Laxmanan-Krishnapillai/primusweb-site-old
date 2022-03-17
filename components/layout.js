import { Navbar } from "./navbar";
import Head from "next/head";
import { Footer } from "./footer";

export default function Layout({ children }) {
    return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    )
  }