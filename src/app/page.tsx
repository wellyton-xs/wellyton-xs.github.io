import Image from "next/image";
import profilePic from "../assets/welly3.jpg";
export default function Home() {
  return (
    <main>
      <section className="container">
        <div className="card">
          <a href="https://github.com/wellyton-xs">
            <Image
              src={profilePic}
              alt="foto de: wellyton barbosa galdino"
              className="imageMoldure"
              height="80"
              width="80"
            />
          </a>
          <p>
            <strong>nome:</strong> wellyton barbosa galdino
            <br />
            <strong>idade:</strong> 18 anos
          </p>

          <p>
            <strong>formação:</strong> curso técnico em informática <br />
            <strong>instituição:</strong> instituto federal de educação ciência
            e tecnologia da paraíba - campus princesa isabel <br />
            <strong>jobs:</strong> dell expert, desenvolvimento web, automação, serviços de TI <br />
            <strong>tecnologias:</strong>
            <strong className="node">Node.js</strong>,
            <strong className="typescript">Typescript</strong>,
            <strong className="javascript">Javascript</strong>,
            <strong className="shellscript">ShellScipt</strong>
            <br />
            <strong>interesses:</strong>
            <strong className="c-sharp">C#</strong> <br />
            <strong>distros linux favoritas:</strong>
            <strong className="archlinux">
              <a href="https://archlinux.org/">archlinux</a>
            </strong>
            ,
            <strong>
              <a href="https://www.biglinux.com.br/">biglinux</a>
            </strong>
            ,
            <strong>
              <a href="https://pop.system76.com/">Pop!_OS</a>
            </strong>
            <br />
            <strong>
              github: <a href="https://github.com/wellyton-xs">wellyton-xs</a>
            </strong>
            <br />
          </p>
          <br />
          <strong>Sobre mim:</strong>
          <p>
            Gosto de tecnologia desde pequeno, tendo aprendido desde os meus
            sete/oito anos a mexer em um computador e tendo começado a minha
            jornada aprendendo a programar com meus treze anos. Comecei pela
            paixão por jogos e descobri também uma paixão por programação, desde
            então venho me aventurando no máximo que posso dentro desse mundo.
            <br/>
            já fiz sites, já fiz automações em shell para os sistemas Linux que
            usei e até aplicativo desktop com electron.js eu já fiz. Até hoje só
            tenho desavenças e magoas com desenvolvimento mobile... Mas vamos
            deixar esse assunto delicado de lado. sou entusiasta de Linux e já
            experimentei distribuições de diversas bases. almejo um dia
            conseguir uma certificação e expandir a novos horizontes a minha
            experiência com o Linux! no momento, estou desenvolvendo minha
            própria distribuição baseada em archlinux utilizando o archiso.
          </p>
        </div>
      </section>
    </main>
  );
}
