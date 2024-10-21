

import { useEffect, useState, useContext } from "react";
import { PiBagThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

import { api } from "../../services/api";
import { CartContext } from "../../content/CartContext";
import { Link } from "react-router-dom";

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Perifericos() {
  const { addItemCart,addItemFavorite } = useContext(CartContext);
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products?category=perifericos");
      const limitedProducts = response.data.slice(0, 12);
      setProducts(limitedProducts);
    }
    getProducts();
  }, []);

  function handleAddCartItem(product: ProductProps) {
    addItemCart(product);
  }
  function handleAddFavorite(product: ProductProps) {
    addItemFavorite(product)
  }

  return (
    <main className="w-full max-w-7xl px-4 mx-auto">
      <h1 className="font-bold text-3xl mb-4 mt-10 uppercase text-center bg-red-600 text-white p-4 ">
        Periféricos
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 my-10 ">
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
                  <CiHeart size={20} color="#fff" 
                  onClick={() => handleAddFavorite(product)}
                  />
                </button>
            </div>
          </section>
        ))}
      </div>

    </main>
  );
}
