import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@radix-ui/react-navigation-menu";

export function NavigationMenuComponent() {
  return (
    <div className="flex flex-row justify-between pl-4 pr-4 h-16 p-4 bg-slate-900/20">
      <h1 className="text-3xl text-amber-50">José Carlos Cavalcanti</h1>
      <NavigationMenu>
        <NavigationMenuList className="flex justify-end gap-4 w-120 text-white">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="">
              Projetos{" "}
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          |
          <NavigationMenuItem>
            <NavigationMenuTrigger className="">
              Sobre
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          |
          <NavigationMenuItem>
            <NavigationMenuTrigger className="">
              Contato{" "}
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

    </div>
  );
}

export default NavigationMenuComponent;
