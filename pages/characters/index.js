import Head from "next/head";
import Link from "next/link";

import Navigation from "../../components/Navigation";
import Metas from "../../components/Metas";

export default function CharactersPage({ characters }) {
  return (
    <div>
      <Head>
        <title>Rick and Morty characters</title>
        <Metas />
      </Head>

      <Navigation />

      <h1>Rick and Morty characters</h1>
      {characters &&
        characters.map(character => {
          return (
            <div>
              <Link href="/characters/[id]" as={`/characters/${character.id}`}>
                <a>
                  <figure>
                    <img src={character.image} alt="" />
                    <figcaption>{character.name}</figcaption>
                  </figure>
                </a>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

CharactersPage.getInitialProps = async function(ctx) {
  const response = await fetch("https://rickandmortyapi.com/api/character/");
  const characters = await response.json();
  return {
    characters: characters.results
  };
};
