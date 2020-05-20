import dynamic from "next/dynamic";

import Head from "../../../components/Head";
import Navigation from "../../../components/Navigation";

const MapNoSSR = dynamic(() => import("../../../components/Map"), {
  ssr: false
});

export default function CharacterPage({ character }) {
  return (
    <div>
      <Head>
        <title>{character.name} presentation | Rick and Morty characters</title>
      </Head>

      <Navigation />

      <h1>{character.name}</h1>
      <img src={character.image} alt="" />
      <div>
        <li>species: {character.species}</li>
        <li>gender: {character.gender}</li>
        <li>origin: {character.origin.name}</li>
      </div>

      <hr />

      <MapNoSSR />
    </div>
  );
}

CharacterPage.getInitialProps = async function(ctx) {
  const id = ctx.query.id;
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const character = await response.json();
  return {
    character
  };
};
