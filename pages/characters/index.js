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
            {console.log('characters: ', characters)}
            {characters &&
            characters.splice(0, 10).map(character => {
                return (
                    <div key={`/characters/${character.id}`}>
                        <Link href="/characters/[id]" as={`/characters/${character.id}`}>
                            <figure>
                                <img src={character.image} alt=""/>
                                <figcaption>{character.name}</figcaption>
                            </figure>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export async function getStaticProps(ctx) {
    debug(ctx);

    console.log('typeof window: ', typeof window)
    const baseUrl = typeof window === 'undefined'
        ? process.env.API_URL
        : process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(`${baseUrl}/character/`);
    const characters = await response.json();
    return {
        props: {
            characters: characters.results
        }
    };
}
