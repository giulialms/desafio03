"use client"

import React, { useState } from 'react'

const page = () => {

  const [data, setData] = useState()

  const product = fetch('https://apitrainees.herokuapp.com/celulares')
    .then((response) => response.json())
    .then((data) => {
      setData(data)
    })
  return (
    data ?
    <div>
      {
        data.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.nome}</p>
              <p>{item.preco}</p>
              <p>{item.descricao}</p>
              <p>{item.img}</p>
            </div>
          )
        })
      }
    </div>
    :
    <h3>Carregando ...</h3>
    
    ) 
}

export default page