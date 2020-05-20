import Head from "next/head";
import Navigation from "../components/Navigation";
import Metas from "../components/Metas";

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About</title>
        <Metas />
      </Head>
      <Navigation />

      <h1>About</h1>
    </div>
  );
}
