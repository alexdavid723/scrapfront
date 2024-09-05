import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo y Título */}
                    <div className="flex items-center">
                        <img
                            className="h-12 w-12 mr-3 rounded-full shadow-md"
                            src={logo}
                            alt="logo"
                        />
                        <span className="text-2xl text-white font-bold tracking-wide">
                            Noticias
                        </span>
                    </div>

                    {/* Botón de Menú de Hamburguesa para Pantallas Pequeñas */}
                    <button
                        className="lg:hidden text-white hover:text-blue-400 transition-colors duration-300 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <Menu size={28} />
                    </button>

                    {/* Menú de Navegación */}
                    <ul
                        className={`lg:flex lg:space-x-10 fixed lg:static left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent transition-transform duration-300 ease-in-out ${isOpen
                                ? "top-16 opacity-100"
                                : "top-[-490px] opacity-0"
                            } lg:opacity-100 lg:flex items-center justify-center lg:py-0 py-4 lg:px-0 px-4 shadow-lg lg:shadow-none z-40`}
                    >
                        <li>
                            <Link
                                to="/"
                                className="text-white block py-2 px-3 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                                onClick={() => setIsOpen(false)} // Cerrar el menú al hacer clic en un enlace
                            >
                                Noticias
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/deportes"
                                className="text-white block py-2 px-3 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                                onClick={() => setIsOpen(false)} // Cerrar el menú al hacer clic en un enlace
                            >
                                Deportes
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/politica"
                                className="text-white block py-2 px-3 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                                onClick={() => setIsOpen(false)} // Cerrar el menú al hacer clic en un enlace
                            >
                                Política
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
