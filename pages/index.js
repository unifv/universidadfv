import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Universidad Francisco de Vitoria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Next.js Toolbox" />
        <p>Universidad Privada en Madrid, Pozuelo. Más del 30% alumnos becados. Líderes en trato personal.</p>
    <p>La formación de la UFV dota al alumno de los conocimientos teóricos necesarios para el desempeño de su profesión, le forma en las habilidades, competencias y talentos imprescindibles para su ejercicio y le transmite los valores y actitudes necesarios para ser un gran profesional el día de mañana.</p>
    <p>Abierta a las personas -sin limitación por razones culturales, sociales o económicas-, y al conocimiento, a las nuevas tecnologías, la ciencia, la investigación, la cultura y el cambio.</p>
    <a href="https://www.ufv.es">https://www.ufv.es</a><br />
      </main>
      <Footer />
    </div>
  );
}
