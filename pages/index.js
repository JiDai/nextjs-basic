import Head from "next/head";
import Navigation from "../components/Navigation";
import Metas from "../components/Metas";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <Metas />
      </Head>
      <Navigation />

      <h1>Hello World.</h1>
    </div>
  );
}
