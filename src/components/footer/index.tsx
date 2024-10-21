import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="w-full text-center mx-auto px-4 py-4 h-32">
        <Link to="/" className="text-white font-bold text-6xl lg: mb-4 lg:mb-0">
          <span className="text-red-600 uppercase">TECH</span> Shop
        </Link>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Sobre nós</h3>
          <p className="text-sm  text-gray-400">
            Somos uma loja dedicada a oferecer os melhores produtos e serviços
            para nossos clientes. Compre com confiança e segurança.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Links rápidos</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-gray-400 hover:underline">
                Início
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-400 hover:underline">
                Promoção
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-400 hover:underline">
                Notebook
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-400 hover:underline">
                Periféricos
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                <FaInstagram size={30} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                <FaFacebook size={30} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                <BsTwitterX size={30} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                <FaYoutube size={30} />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contato</h3>
          <p className="text-sm text-gray-400">Email: techshop@gmail.com</p>
          <p className="text-sm text-gray-400">Telefone: +55 71 99999-9999</p>
          <p className="text-sm text-gray-400">
            Endereço: Rua teste, 12, Salvador, BA
          </p>
        </div>
      </div>

      <div className="bg-black h-auto p-4 flex text-center mx-auto justify-center mt-8 text-gray-500 text-sm">
        &copy; 2024 E-commerce. Todos os direitos reservados.
      </div>
    </footer>
  );
}
