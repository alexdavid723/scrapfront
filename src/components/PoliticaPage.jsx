import React, { useState, useEffect } from 'react';
import { db, collection, getDocs } from '../firebase-config';

const ITEMS_PER_PAGE = 9;

const PoliticaPage = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'politica'));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setArticles(data);
      } catch (error) {
        console.error('Error fetching documents: ', error);
      }
    };

    fetchData();
  }, []);

  // Calculate the indices for slicing the articles array
  const indexOfLastArticle = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ITEMS_PER_PAGE;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Calculate total number of pages
  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Política</h1>
      <p className="text-lg mb-6 text-center text-gray-600">Aquí encontrarás las últimas noticias políticas.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentArticles.map(article => (
          <div key={article.id} className="bg-white p-4 rounded-lg shadow-lg">
            <a href={article.enlace} target="_blank" rel="noopener noreferrer">
              <img src={article.urlimagen} alt={article.titulo} className="w-full h-48 object-cover rounded-md mb-4" />
            </a>
            <h4 className="text-xl font-semibold mb-2">{article.titulo}</h4>
            <p className="text-gray-700">{article.parrafo}</p>
          </div>
        ))}
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <nav>
            <ul className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index + 1}>
                  <button
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default PoliticaPage;
