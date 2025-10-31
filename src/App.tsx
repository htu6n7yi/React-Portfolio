import { Banner } from "./components/banner/banner";
import { NavigationMenuComponent } from "./components/banner/nav";
import { CarouselSpacing } from "./components/banner/carousel";
import { useState } from "react";
import Projetos from "./pages/projetos";
import { Route, Routes } from "react-router-dom";

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
       <Routes>
          {/* Rota 1: A "homepage" (URL: /) vai renderizar o Banner */}
          <Route path="/" element={<Banner />} />

          {/* Rota 2: A URL /projetos vai renderizar a página de Projetos */}
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </main>
      <CarouselSpacing />
    </div>
  );
}

export default App;
