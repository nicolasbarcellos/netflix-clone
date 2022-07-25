import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";
import { fetchData } from "../services/requests";
import { Responses } from "../typings";

const Home: NextPage<Responses> = ({ responses }: Responses) => {
  const {
    netflixOriginals,
    trending,
    comedyMovies,
    topRated,
    actionMovies,
    documentaries,
    horrorMovies,
    romanceMovies,
  } = responses;
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Home - Netflix</title>
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-10  ">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trending} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={documentaries} />
          <Row title="Romance Movies" movies={horrorMovies} />
          <Row title="Documentaries" movies={romanceMovies} />
        </section>
      </main>
    </div>
  );
};

//

export const getStaticProps: GetStaticProps = async () => {
  const responses = await fetchData();

  return {
    props: { responses },
    revalidate: 300, // 5 minutes
  };
};

export default Home;
