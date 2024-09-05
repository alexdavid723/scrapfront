import React, { useEffect, useState } from 'react';
import { db, collection, getDocs } from '../firebase-config'; // Ajusta la ruta según tu estructura de proyecto

const DeportesPage = () => {
  const [noticias, setNoticias] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const noticiasPerPage = 4; // Ajustado a 4 noticias por página

  useEffect(() => {
    // Función para obtener datos de Firestore
    const fetchNoticias = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'deportes'));
        const noticiasData = querySnapshot.docs.map(doc => doc.data());
        setNoticias(noticiasData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchNoticias();
  }, []);

  // Calcular el índice de inicio y fin de las noticias para la página actual
  const indexOfLastNoticia = currentPage * noticiasPerPage;
  const indexOfFirstNoticia = indexOfLastNoticia - noticiasPerPage;
  const currentNoticias = noticias.slice(indexOfFirstNoticia, indexOfLastNoticia);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(noticias.length / noticiasPerPage);

  // Funciones para cambiar la página
  const goToPage = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row">
      {/* Sección de Noticias */}
      <div className="flex-1 mb-6 lg:mb-0 lg:mr-6">
      <header className="text-center mb-12">
        <h1 className=" text-2xl md:text-3xl font-bold mb-4">Deportes</h1>
        <p className=" text-base md:text-lg mb-4">Aquí encontrarás las últimas noticias deportivas.</p>
        <p className=" text-lg text-gray-600">Obtenido desde:</p>
          <a className=" text-red-900 font-extrabold text-3xl" href=" https://www.tododxt.pe/category/puno/juliaca/page/3/">gruposinfronteras.pe</a>
          </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {currentNoticias.map((noticia, index) => (
            <div key={index} className="border rounded-lg shadow-lg overflow-hidden">
              <img src={noticia.urlimagen} alt={noticia.titulo} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{noticia.titulo}</h3>
                <p className="text-gray-700 text-sm md:text-base">{noticia.parrafo}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <ul className="flex space-x-2">
            {[...Array(totalPages).keys()].map((pageNumber) => (
              <li key={pageNumber + 1}>
                <button
                  onClick={() => goToPage(pageNumber + 1)}
                  className={`px-4 py-2 border rounded ${
                    currentPage === pageNumber + 1
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-300 text-gray-800'
                  }`}
                >
                  {pageNumber + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sección de Próximos Partidos */}
      <div className="w-full lg:w-80">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Se vienen las eliminatorias</h2>
  <div className="bg-white p-4 rounded-lg shadow-lg">
    {[
      { equipos: ['', ''], hora: 'Hoy 3:00 p.m.', logos: ['SGxeD7yhwPj53FmPBmMMHg_48x48.png', 'ohjuAvV5dzyPZSEWWNNd_Q_48x48.png'] },
      { equipos: ['', ''], hora: 'Hoy 7:00 p.m.', logos: ['1xBWyjjkA6vEWopPK3lIPA_48x48.png', 'cI5rCchv6SjDgZ5NuEaMMQ_48x48.png'] },
      { equipos: ['', ''], hora: 'Mañana 6:30 p.m.', logos: ['KnSUdQWiGRoy89q4x85IgA_48x48.png', '-FN-y84Al3dbth0hW1t5Qg_48x48.png'] },
      { equipos: ['', ''], hora: 'Mañana 8:00 p.m.', logos: ['zKLzoJVYz0bb6oAnPUdwWQ_48x48.png', 'AKqvkBpIyr-iLOK7Ig7-yQ_48x48.png'] },
      { equipos: ['', ''], hora: 'Mañana 8:30 p.m.', logos: ['1ZizIpPB_eo-u8zYYjnFcg_48x48.png', 'tXHnA_tDylayacdjWQCJvw_48x48.png'] }
    ].map((match, index) => (
      <div key={index} className="mb-4 p-4 flex items-center bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition duration-300">
        <div className="flex items-center space-x-2">
          {match.logos.map((logo, i) => (
            <div key={i} className="flex items-center space-x-2">
              <img 
                src={`//ssl.gstatic.com/onebox/media/sports/logos/${logo}`} 
                alt={match.equipos[i]} 
                className="w-10 h-10 object-cover rounded-full border border-gray-300" 
              />
              <span className="text-lg font-medium text-gray-700">{match.equipos[i]}</span>
            </div>
          ))}
        </div>
        <span className="mx-4 text-gray-600">vs</span>
        <span className="ml-auto text-gray-500 text-sm">{match.hora}</span>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default DeportesPage;
