import React, { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@radix-ui/react-navigation-menu";

// Ícones de exemplo (substitua por ícones de uma biblioteca se preferir)
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);


export function NavigationMenuComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    
  // Lista de links para evitar repetição (boa prática!)
  const navLinks = [
    { label: "Projetos", href: "#projetos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <div className="flex flex-col bg-slate-900/20 text-white shadow-lg">
        {/* HEADER BAR (Sempre visível) */}
        <div className="flex justify-between items-center h-16 px-4">
            <h1 className="text-xl font-bold text-amber-50">José Carlos Cavalcanti</h1>

            {/* 1. BOTÃO DO HAMBÚRGUER (Visível APENAS em telas pequenas) */}
            <button 
                onClick={toggleMenu} 
                className="md:hidden text-white focus:outline-none"
                aria-label="Menu de Navegação"
            >
                {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>

            {/* 2. MENU DE NAVEGAÇÃO COMPLETO (Visível APENAS em telas MD ou maiores) */}
            <NavigationMenu className="hidden md:block"> 
                <NavigationMenuList className="flex justify-end items-center gap-4 text-white">
                    {navLinks.map((link, index) => (
                        <React.Fragment key={link.label}>
                            <NavigationMenuItem>
                                {/* O NavigationMenuTrigger do Radix geralmente lida com dropdowns.
                                    Para links simples, você pode usar uma <a>tag ou <Link> do React Router.
                                    Vou manter o Trigger para o exemplo, mas adicionei a href: */}
                                <a href={link.href} className="hover:text-amber-300">
                                    {link.label}
                                </a>
                            </NavigationMenuItem>
                            {/* Adiciona o separador "|" apenas entre os itens */}
                            {index < navLinks.length - 1 && (
                                <span className="text-gray-500">|</span>
                            )}
                        </React.Fragment>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>

        {/* 3. MENU MÓVEL (Visível APENAS quando 'isMenuOpen' é TRUE e tela pequena) */}
        <div 
            className={`
                md:hidden 
                overflow-hidden transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
            `}
        >
            <NavigationMenu className="w-full">
                <NavigationMenuList className="flex flex-col w-full text-white p-4">
                    {navLinks.map((link) => (
                        <NavigationMenuItem key={link.label} className="w-full">
                            <a 
                                href={link.href} 
                                onClick={toggleMenu} // Fecha o menu ao clicar
                                className="block py-3 px-2 border-b border-slate-700 hover:bg-slate-800 transition-colors w-full"
                            >
                                {link.label}
                            </a>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    </div>
  );
}

export default NavigationMenuComponent;