const Banner = () => {
    return (
      <div className="bg-secundaria">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-branco sm:text-5xl md:text-6xl">
              Compre na nossa loja!
            </h1>
            <p className="mt-4 text-xl text-offwhite">
              Comece aqui.
            </p>
            <div className="mt-6">
              <a
                href="loja"
                className="inline-block bg-background hover:bg-terciaria text-branco font-bold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-95"
              >
                Visite nossa loja
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  