import Head from "../components/Head";
import Navigation from "../components/Navigation";
import debug from "../helpers/debug";

export default function EpisodesPage({episodes}) {
    return (
        <div>
            <Head>
                <title>Episodes</title>
            </Head>

            <Navigation/>

            <h1>Last episodes</h1>
            {episodes &&
            episodes.map(episode => {
                return (
                    <p key={`/episode/${episode.id}`}>
                        {episode.episode} {episode.name}
                        <br/>
                        {episode.air_date}
                    </p>
                );
            })}
        </div>
    );
}

EpisodesPage.getInitialProps = async function (ctx) {
    debug(ctx);
    const baseUrl = typeof window === 'undefined'
        ? process.env.API_URL
        : process.env.NEXT_PUBLIC_API_URL;

    // Get last apge
    let response = await fetch(`${baseUrl}/episode/`);
    response = await response.json();
    response = await fetch(
        `${baseUrl}/episode/?page=${response.info.pages}`
    );
    response = await response.json();

    const episodes = response.results;
    episodes.sort((a, b) => (a.episode < b.episode ? 1 : -1));

    return {episodes};
};
