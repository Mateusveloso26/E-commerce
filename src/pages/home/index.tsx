import { useEffect, useState } from "react";
import { PiBagThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

import { api } from "../../services/api";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }
    getProducts();
  }, []);

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 uppercase text-center">
          Produtos em alta
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <section key={product.id} className="w-full">
              <img
                className="w-full rounded-lg max-h-60 mb-2"
                src={product.cover}
                alt={product.title}
              />
              <p className="font-medium mt-1 mb-2">{product.title}</p>
              <div className="flex gap-3 items-center">
                <strong className="text-zinc-700/90">{product.price.toLocaleString("pt-BR",{
                    style:"currency",
                    currency:"BRL"
                })}</strong>

                <button className="bg-zinc-900 p-1 rounded  ">
                  <PiBagThin size={20} color="#fff" />
                </button>
                <button className="bg-zinc-900 p-1 rounded  ">
                  <CiHeart size={20} color="#fff" />
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
