import React, { useState, useEffect } from 'react';
import { db, collection, getDocs } from '../firebase-config';

// Componente para mostrar noticias
const NoticiasPage = () => {
  const [noticiasData, setNoticiasData] = useState([]);
  const [noticiasSecundariasData, setNoticiasSecundariasData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const noticiasPerPage = 8;

  useEffect(() => {
    const fetchNoticias = async () => {
      const noticiasCollection = collection(db, 'noticias');
      const noticiasSnapshot = await getDocs(noticiasCollection);
      const noticiasList = noticiasSnapshot.docs.map((doc) => doc.data());
      setNoticiasData(noticiasList);
      setNoticiasSecundariasData(noticiasList.slice(0, 15)); // Solo las primeras 8 noticias secundarias
    };

    fetchNoticias();
  }, []);

  const indexOfLastNoticia = currentPage * noticiasPerPage;
  const indexOfFirstNoticia = indexOfLastNoticia - noticiasPerPage;
  const currentNoticias = noticiasData.slice(indexOfFirstNoticia, indexOfLastNoticia);

  const totalPages = Math.ceil(noticiasData.length / noticiasPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
      {/* Noticias principales */}
      <main className="flex-grow mb-8 lg:mb-0 lg:mr-4 lg:w-2/3">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Últimas Noticias</h1>
          <p className="text-lg text-gray-600">Mantente al tanto de las últimas noticias y eventos.</p>
          <p className="text-lg text-gray-600">Obtenido desde:</p>
          <a className=" text-red-900 font-extrabold text-3xl" href=" https://diariocorreo.pe/noticias/juliaca/?ref=dcr">diariocorreo</a>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {currentNoticias.map((noticia) => (
            <div key={noticia.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={noticia.urlimagen}
                alt={noticia.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{noticia.titulo}</h2>
                {/*<p className="text-gray-600 mb-4">{noticia.parrafo}</p>*/}
                <div className="flex justify-between items-center">
                 
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 font-medium"
                  >
                    
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paginación */}
        <div className="flex justify-center mt-8 px-4">
          <ul className="flex flex-wrap justify-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index + 1}>
                <button
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-3 py-2 rounded-lg ${currentPage === index + 1 ? 'bg-blue-500 text-white'
                      : 'bg-gray-300 text-gray-800'
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Noticias secundarias */}
      <aside className="hidden lg:block lg:w-1/3">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Noticias Adicionales</h2>
          {noticiasSecundariasData.map((noticia) => (
            <div key={noticia.id} className="flex items-start mb-4 border-b border-gray-200 pb-4">
              <img
                src={noticia.urlimagen}
                alt={noticia.titulo}
                className="w-24 h-16 object-cover mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{noticia.titulo}</h3>
                {/* <p className="text-gray-600 text-sm mb-2">{noticia.parrafo}</p> */}
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  
                </a>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default NoticiasPage;
