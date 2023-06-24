const Banner = () => {
    return (
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Bem-vindo ao nosso site!
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Este é um exemplo de banner utilizando React, Next.js e Tailwind CSS.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-block bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  