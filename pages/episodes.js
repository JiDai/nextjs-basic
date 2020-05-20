import Head from "../components/Head";
import Navigation from "../components/Navigation";
import debug from "../helpers/debug";

export default function EpisodesPage({ episodes }) {
  return (
    <div>
      <Head>
        <title>Episodes</title>
      </Head>

      <Navigation />

      <h1>Last episodes</h1>
      {episodes &&
        episodes.map(episode => {
          return (
            <p key={`/episode/${episode.id}`}>
              {episode.episode} {episode.name}
              <br />
              {episode.air_date}
            </p>
          );
        })}
    </div>
  );
}

EpisodesPage.getInitialProps = async function(ctx) {
  debug(ctx);
  // Get last apge
  let response = await fetch("https://rickandmortyapi.com/api/episode/");
  response = await response.json();
  response = await fetch(
    `https://rickandmortyapi.com/api/episode/?page=${response.info.pages}`
  );
  response = await response.json();

  const episodes = response.results;
  episodes.sort((a, b) => (a.episode < b.episode ? 1 : -1));

  return { episodes };
};