import { Banner } from "./components/banner/banner";
import { NavigationMenuComponent } from "./components/banner/nav";
import { CarouselSpacing } from "./components/banner/carousel";

function App() {
  return (
    <div className="bg-gradient-to-l from-slate-700 to-slate-900 flex flex-col justify-between">
      <NavigationMenuComponent />
      <main>
        <Banner />
      </main>
      <CarouselSpacing />
    </div>
  );
}

export default App;
