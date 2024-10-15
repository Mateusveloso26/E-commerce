import { useEffect, useState, useContext } from "react";
import { PiBagThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

import { api } from "../../services/api";
import { CartContext } from "../../content/CartContext";
import { Link } from "react-router-dom";
import { Slider } from "../../components/slider";

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  const { addItemCart } = useContext(CartContext);
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      const limitedProducts = response.data.slice(0, 8);
      setProducts(limitedProducts);
    }
    getProducts();
  }, []);

  function handleAddCartItem(product: ProductProps) {
    addItemCart(product);
  }

  
  return (
    <div>
      <Slider />
      <div className="flex my-4 gap-4 justify-center">
        <Link to="/">
          <img src="public\assets\anuncio.png" alt="banner" className="hover:brightness-150" />
        </Link>
        <Link to="/">
          <img src="public\assets\anuncio2.png" alt="banner" className="hover:brightness-150" />
        </Link>
      </div>

      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="font-bold text-3xl mb-4 mt-10 uppercase text-center">
          Produtos em alta
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-10 ">
          {products.map((product) => (
            <section key={product.id} className="w-full  ">
              <Link to={`/product/${product.id}`}>
                <img
                  className="w-5/6 m-auto rounded-lg max-h-60 mb-2 duration-300 box-border resize-none  hover:scale-105"
                  src={product.cover}
                  alt={product.title}
                />
                <p className="font-medium mt-1 mb-2">{product.title}</p>
              </Link>
              <div className="flex gap-3 items-center">
                <strong className="text-zinc-700/90">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>

                <button
                  className="bg-zinc-900 p-1 rounded"
                  onClick={() => handleAddCartItem(product)}
                >
                  <PiBagThin size={20} color="#fff" />
                </button>
                <button className="bg-zinc-900 p-1 rounded">
                  <CiHeart size={20} color="#fff" />
                </button>
              </div>
            </section>
          ))}
        </div>
        <div className="mt-20">
          <Link to="/">
            <img src="public\assets\banner3.png" alt="banner da loja" />
          </Link>
        </div>
      </main>

      <div className="bg-black h-auto flex flex-col md:flex-row w-full my-16 justify-center items-center  text-white p-6  shadow-lg">
        <div className="text-center md:text-left mb-6 mx-10 md:mb-0">
          <h2 className="text-3xl font-bold mb-2">
            Cadastre-se em nossa newsletter
          </h2>
          <p className="font-medium text-lg">
            Receba ofertas exclusivas e novidades
          </p>
        </div>

        <form className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Qual é seu nome?"
            required
            className="px-6 py-3 rounded-lg w-full md:w-80 text-black focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
          <input
            type="email"
            placeholder="Seu e-mail?"
            required
            className="px-6 py-3 rounded-lg w-full md:w-80 text-black focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
          <input
            type="submit"
            value="CADASTRAR"
            className="bg-red-500 py-3 px-8 rounded-lg text-white cursor-pointer hover:bg-red-600 transition w-full md:w-auto"
          />
        </form>
      </div>
    </div>
  );
}
