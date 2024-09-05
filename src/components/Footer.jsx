import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-4">
        {/* Secciones del Footer */}
        <div className="flex flex-wrap justify-between items-start">
          {/* Sección de Enlaces */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Enlaces</h2>
            <ul className="space-y-2">
              <li>
                <a href="#deportes" className="hover:text-blue-400 transition-colors duration-300">
                  Deportes
                </a>
              </li>
              <li>
                <a href="#politica" className="hover:text-blue-400 transition-colors duration-300">
                  Política
                </a>
              </li>
              
              <li>
                <a href="#contacto" className="hover:text-blue-400 transition-colors duration-300">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Sección de Información de Contacto */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Contacto</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                <span>Juliaca-Puno</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-500" />
                <span>123456789</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-500" />
                <span>noticias.com</span>
              </li>
            </ul>
          </div>

          {/* Sección de Redes Sociales */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Síguenos</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Nota de Derechos de Autor */}
        <div className="border-t border-gray-700 pt-4 mt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Noticias.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
