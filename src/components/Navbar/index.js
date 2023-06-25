"use client"
import React, { useState } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import logo from '@/assets/svg/logo.svg';
import dropdown from '@/assets/svg/dropdown.svg';

function Index() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <nav className="bg-background">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex items-center justify-center">
              <NextLink href="/">
                <span>
                  <Image src={logo} />
                </span>
              </NextLink>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 justify-center items-center">
                <StyledLink href="/sobre">Sobre</StyledLink>
                <StyledLink href="/loja">Loja</StyledLink>
                <StyledLink href="/contato">Contato</StyledLink>
              </div>
            </div>
          </div>
          <div className="sm:hidden">
            <button
              className="text-branco cursor-pointer"
              onClick={toggleMobileNav}
            >
              <div classname="sm:px-6 lg:px-8">
              <Image src={dropdown} width="30" height="30" />
              </div>
            </button>
          </div>
        </div>
        {mobileNavOpen && (
          <div className="sm:hidden">
            <div className="flex flex-col space-y-2">
              <StyledLinkMobile href="/sobre">Sobre</StyledLinkMobile>
              <StyledLinkMobile href="/loja">Loja</StyledLinkMobile>
              <StyledLinkMobile href="/contato">Contato</StyledLinkMobile>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Componente customizado para aplicar estilos ao NextLink (desktop)
const StyledLink = ({ href, children }) => {
  return (
    <div className="transition-colors duration-300 hover:bg-terciaria py-8">
      <NextLink href={href}>
        <span className="text-branco cursor-pointer">{children}</span>
      </NextLink>
    </div>
  );
};


// Componente customizado para aplicar estilos ao NextLink (mobile)
const StyledLinkMobile = ({ href, children }) => {
  return (
    <div className="transition-colors duration-300 hover:bg-terciaria py-4">
      <NextLink href={href}>
        <span className="text-branco cursor-pointer">{children}</span>
      </NextLink>
    </div>
  );
};

export default Index;
