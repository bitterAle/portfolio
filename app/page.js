import Image from "next/image";

import Head from 'next/head';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testy from "./components/Testy";
import Stack from "./components/stack";
import Work from "./components/Work";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function Home() {
  return (

    <>
   <Navbar/>
   <Hero/>
   <Services/>
   <Testy/>
   <Stack/>
   <Work/>
   <Blog/>
   <Footer/>
   </>
  );
}
