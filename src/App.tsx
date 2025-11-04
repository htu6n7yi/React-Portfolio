import { Banner } from "./components/banner/banner";
import { NavigationMenuComponent } from "./components/banner/nav";
import { CarouselSpacing } from "./components/banner/carousel";
import Projetos from "./pages/projetos";
import { Route, Routes } from "react-router-dom";
import Sobre from "./pages/sobre";

function App() {


  return (
    <div className="bg-gradient-to-l from-slate-700 to-slate-900 flex flex-col justify-between min-h-screen">
      <NavigationMenuComponent />
      <main className="">
       <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
      <CarouselSpacing />
    </div>
  );
}

export default App;
