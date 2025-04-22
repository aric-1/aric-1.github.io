import React from 'react';
import Head from "next/head";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import CurrentWork from "../components/CurrentWork";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aric's Website</title>
        <meta name="description" content="Welcome to my personal site." />
      </Head>

      <main className="min-h-screen bg-white text-gray-900">
        <Header title="Aric Shen" />
        <AboutMe />
        <CurrentWork />
        <Footer />
      </main>
    </>
  );
}