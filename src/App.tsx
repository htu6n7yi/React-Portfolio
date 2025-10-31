import { Banner } from "./components/banner/banner";
import { NavigationMenuComponent } from "./components/banner/nav";
import { CarouselSpacing } from "./components/banner/carousel";
import { useState } from "react";
import Projetos from "./pages/projetos";

function App() {
  const [mainDefault, setMain] = useState(true);

  // 1. Esta função será responsável por alterar o estado
  const handleShowProjects = () => {
    setMain(false); // Altera o estado para exibir a página de projetos
  };

  return (
    <div className="bg-gradient-to-l from-slate-700 to-slate-900 flex flex-col justify-between min-h-screen">
      <NavigationMenuComponent />
      <main className="">
        {mainDefault ? (
          <Banner onShowProjectsClick={handleShowProjects} />
        ) : (
          <Projetos />
        )}
      </main>
      <CarouselSpacing />
    </div>
  );
}

export default App;
