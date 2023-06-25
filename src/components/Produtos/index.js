import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';

function Produtos() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://apitrainees.herokuapp.com/celulares')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {data ? (
        data.map((item, index) => {
          return (
            <div key={index} className="max-w-md mx-4 my-4 p-4 bg-background rounded-lg shadow-md transform transition-transform duration-300 hover:scale-95">
              <p className="py-2 text-xl font-bold">{item.nome}</p>
              <p className="text-lg font-semibold">{item.preco}</p>
              <p className="py-2 text-sm">{item.descricao}</p>
              <img src={item.img} alt={item.nome} /> {/* Adiciona a tag <img> para exibir a imagem */}
            </div>
          );
        })
      ) : (
        <h3>Carregando ...</h3>
      )}
    </div>
  );
}

export default Produtos;
