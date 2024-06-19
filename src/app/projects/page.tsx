import Repos from "../../components/Repos";
import { Repo } from "src/interfaces";

export default async function Projects({ repos }: any) {
  return (
    <main>
      <section className="container">
        <div className="card">
          <h1>Meus Projetos</h1>
          <Repos/>
        </div>
      </section>
    </main>
  );
}

