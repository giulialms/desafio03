import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import logo from '@/assets/svg/logo.svg';

function Index() {
  return (
    <nav className="bg-background">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex items-center justify-center">
              <NextLink href="/">
                  <Image src={logo} />
              </NextLink>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div
                className="flex space-x-4 justify-center items-center"
                style={{ height: '100%' }}
              >
                <StyledLink href="/sobre">Sobre</StyledLink>
                <StyledLink href="/loja">Loja</StyledLink>
                <StyledLink href="/contato">Contato</StyledLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Componente customizado para aplicar estilos ao NextLink
const StyledLink = ({ href, children }) => {
  return (
    <div className="transition-colors duration-300 hover:bg-terciaria">
      <NextLink href={href}>
        <span className="text-branco cursor-pointer">{children}</span>
      </NextLink>
    </div>
  );
};


export default Index;
