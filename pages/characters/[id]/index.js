import Head from "next/head";

import Navigation from "../../components/Navigation";
import Metas from "../../components/Metas";

export default function CharacterPage({ character }) {
  return (
    <div>
      <Head>
        <title>{character.name} presentation | Rick and Morty characters</title>
        <Metas />
      </Head>

      <Navigation />
      <h1>{character.name}</h1>
      <img src={character.image} alt="" />
      <div>
        <li>species: {character.species}</li>
        <li>gender: {character.gender}</li>
        <li>origin: {character.origin}</li>
      </div>
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
