import dynamic from "next/dynamic";
import {useRouter} from 'next/router';

import Head from "../../../components/Head";
import Navigation from "../../../components/Navigation";
import debug from "../../../helpers/debug";

const MapNoSSR = dynamic(() => import("../../../components/Map"), {
    ssr: false
});

export default function CharacterPage({character}) {
    const router = useRouter();
    if (router.isFallback) {
        return <div>
            <title>Loading... | Rick and Morty characters</title>
            <div>Loading...</div>
        </div>;
    }

    return (
        <div>
            <Head>
                <title>{character.name} presentation | Rick and Morty characters</title>
            </Head>

            <Navigation/>
            <h1>{character.name}</h1>
            <img src={character.image} alt=""/>
            <div>
                <li>species: {character.species}</li>
                <li>gender: {character.gender}</li>
                <li>origin: {character.origin.name}</li>
            </div>

            <hr/>

            <MapNoSSR/>
        </div>
    );
}

export async function getStaticPaths() {
    const response = await fetch(
        `https://rickandmortyapi.com/api/character/`
    );
    const characters = await response.json();

    return {
        paths: characters.results.map(character => ({params: {id: String(character.id)}})),
        fallback: true
    };
}

export async function getStaticProps(ctx) {
    debug(ctx);
    const id = ctx.params.id;
    const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
    );
    const character = await response.json();
    return {
        props: {character},
    };
};
