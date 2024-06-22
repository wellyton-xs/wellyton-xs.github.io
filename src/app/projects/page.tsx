import Repos from "../../components/repos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos | Welly"
}

export default async function Projects() {
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

