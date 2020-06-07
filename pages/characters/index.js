import Link from "next/link";

import Head from "../../components/Head";
import Navigation from "../../components/Navigation";
import debug from "../../helpers/debug";

export default function CharactersPage({characters}) {
    return (
        <div>
            <Head>
                <title>Rick and Morty characters</title>
            </Head>

            <Navigation/>

            <h1>Rick and Morty characters</h1>
            {characters &&
            characters.splice(0, 10).map(character => {
                return (
                    <div key={`/characters/${character.id}`}>
                        <Link href="/characters/[id]" as={`/characters/${character.id}`}>
                            <a>
                                <figure>
                                    <img src={character.image} alt=""/>
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

export async function getStaticProps(ctx) {
    debug(ctx);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/character/`);
    const characters = await response.json();
    return {
        props: {
            characters: characters.results
        }
    };
}
