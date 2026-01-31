import { SiGithub } from "react-icons/si";
import { ExternalLink } from "lucide-react";
import gerador from "../assets/gerador-curriculo.png";
import litera from "../assets/litera.jpeg";
import roadmap from "../assets/roadmap.jpeg";

const Projetos = () => {
  const dataProjetos = [
    {
      title: "Gerador de Currículo",
      image: gerador,
      deploy: "https://projeto-8-gerador-curriculo.vercel.app/",
      repositorio: "https://github.com/htu6n7yi/projeto-8-gerador-curriculo/tree/main",
      descricao: "Aplicação web intuitiva para criação de currículos profissionais. Permite personalização completa de layout, cores e seções, com exportação em PDF de alta qualidade.",
      tecnologias: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Litera",
      image: litera,
      deploy: "https://litera-six.vercel.app/",
      repositorio: "https://github.com/htu6n7yi/litera",
      descricao: "Plataforma completa de leitura e compartilhamento de conteúdo literário. Oferece recursos de biblioteca pessoal, anotações e recomendações personalizadas.",
      tecnologias: ["React", "Tailwind CSS", "Next.js"],
    },
    {
      title: "Roadmap de Estudos",
      image: roadmap,
      deploy: "https://projeto-7-green.vercel.app/",
      repositorio: "https://github.com/htu6n7yi/projeto-7/tree/main",
      descricao: "Sistema interativo para planejamento e acompanhamento de trilhas de aprendizado. Organize seus estudos com metas, progresso visual e cronogramas personalizados.",
      tecnologias: ["React", "JavaScript", "CSS3"],
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-slate-900 overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900 -z-10" />
      
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-600/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Cabeçalho da seção */}
        <div className="mb-12 lg:mb-16 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Meus <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Projetos</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl lg:max-w-none">
            Confira alguns dos projetos que desenvolvi
          </p>
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dataProjetos.map((projeto) => (
            <div
              key={projeto.title}
              className="group relative bg-slate-800/50 border-2 border-slate-700/50 hover:border-blue-600/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/20 flex flex-col"
            >
              {/* Imagem do projeto */}
              <div className="relative overflow-hidden aspect-video bg-slate-900/50">
                <img
                  src={projeto.image}
                  alt={projeto.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay na imagem */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Badge de status */}
                <div className="absolute top-3 right-3 bg-green-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Online
                </div>
              </div>

              {/* Conteúdo do card */}
              <div className="flex flex-col flex-grow p-6">
                {/* Título */}
                <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-3">
                  {projeto.title}
                </h3>

                {/* Descrição */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
                  {projeto.descricao}
                </p>

                {/* Tags de tecnologias */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {projeto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-600/20 border border-blue-600/40 text-blue-300 text-xs font-medium rounded-full transition-colors duration-300 hover:bg-blue-600/30 hover:border-blue-500/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botões */}
                <div className="flex gap-3 mt-auto">
                  {/* Botão GitHub */}
                  <a
                    href={projeto.repositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-700/50 hover:bg-slate-600/70 border-2 border-slate-600 hover:border-slate-500 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn"
                  >
                    <SiGithub className="w-5 h-5 transition-transform group-hover/btn:rotate-12" />
                    <span className="text-sm">Código</span>
                  </a>

                  {/* Botão Deploy */}
                  <a
                    href={projeto.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600/30 hover:bg-blue-600/50 border-2 border-blue-600 hover:border-blue-500 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/20 group/btn"
                  >
                    <ExternalLink className="w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>

              {/* Borda animada no hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-slate-400 mb-6">
            Quer ver mais? Confira meu GitHub para outros projetos!
          </p>
          <a
            href="https://github.com/htu6n7yi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-700/40 hover:bg-slate-600/60 border-2 border-blue-600/50 hover:border-blue-500 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
          >
            <SiGithub className="w-6 h-6" />
            <span>Ver todos os projetos</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projetos;