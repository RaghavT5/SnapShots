import Head from "next/head";
import Hero from "@/components/Hero";
import Slideshow from "@/components/Slideshow";
import { slideshowData } from "@/components/slideshowData";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SnapShots</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading="SnapShots"
        message="As a photographer, I believe that every picture tells a story. Let me tell your story through my lens."
      />
      <Slideshow slides={slideshowData} />
    </div>
  );
}
