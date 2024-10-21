import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { ProductProps } from "../home";
import { PiBagThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { CartContext } from "../../content/CartContext";

export function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps>();
  const { addItemCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    }
    getProduct();
  }, [id]);

  function handleAddItem(product: ProductProps) {
    addItemCart(product);
    navigate("/cart")
  }

  return (
    <div className="h-dvh">
      <main className="w-full max-w-7xl px-4 mx-auto my-10">
        {product && (
          <section className="w-full">
            <div className="flex flex-col lg:flex-row ">
              <img
                className="flex-1 w-full max-h-72 object-contain duration-300 hover:scale-105"
                src={product?.cover}
                alt={product?.title}
              />
              <div className="flex-1">
                <p className="font-bold text-2xl mt-4 mb-2">{product?.title}</p>
                <h3 className="text-2xl font-medium">Descrição</h3>
                <p className="my-4 text-justify">{product?.description}</p>
                <strong className="text-zinc-700/90 text-xl">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <button
                  className="bg-zinc-900 p-1 mx-4 rounded"
                  onClick={() => handleAddItem(product)}
                >
                  <PiBagThin size={20} color="#fff" />
                </button>
                <button className="bg-zinc-900 p-1 rounded">
                  <CiHeart size={20} color="#fff" />
                </button>
              </div>
            </div>
            <hr className="mt-10" />
          </section>
        )}
      </main>
    </div>
  );
}
