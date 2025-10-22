import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@radix-ui/react-navigation-menu";

export function NavigationMenuComponent() {
  return (
    <div className="flex flex-row justify-between pl-4 pr-4 h-16">
        <h1 className="text-3xl text-amber-50">José Carlos Cavalcanti</h1>
      <NavigationMenu>
        <NavigationMenuList className="grid grid-cols-3 gap-4 w-120">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="">Item 1</NavigationMenuTrigger>
            <NavigationMenuContent>Content 1</NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item 2</NavigationMenuTrigger>
            <NavigationMenuContent>Content 2</NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item 3</NavigationMenuTrigger>
            <NavigationMenuContent>Content 3</NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default NavigationMenuComponent;
