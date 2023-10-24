import dynamic from "next/dynamic";
import {useRouter} from "next/router";

import Head from "../../../components/Head";
import Navigation from "../../../components/Navigation";
import debug from "../../../helpers/debug";

const SimpleCanvas = dynamic(() => import("../../../components/SimpleCanvas"), {
    ssr: false
});

export default function CharacterPage({character}) {
    const router = useRouter();
    if (router.isFallback) {
        return (
            <div>
                <Head>
                    <title>Loading... | Rick and Morty characters</title>
                </Head>
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <div>
            <Head>
                <title>{character.name} presentation | Rick and Morty characters</title>
            </Head>

            <Navigation/>
            <h1>{character.name}</h1>
            <img src={character.image} alt=""/>
            <ul>
                <li>species: {character.species}</li>
                <li>gender: {character.gender}</li>
                <li>origin: {character.origin.name}</li>
            </ul>

            <hr/>

            <SimpleCanvas />
        </div>
    );
}

export async function getStaticPaths() {
    const characters = [{id: 1}];

    return {
        paths: characters.map(character => ({
            params: {id: String(character.id)}
        })),
        fallback: true
    };
}

export async function getStaticProps(ctx) {
    debug(ctx);
    console.log('typeof window: ', typeof window)

    const baseUrl = typeof window === 'undefined'
        ? process.env.API_URL
        : process.env.NEXT_PUBLIC_API_URL;

    const id = ctx.params.id;
    const response = await fetch(
        `${baseUrl}/character/${id}`
    );
    const character = await response.json();
    return {
        props: {character}
    };
}
