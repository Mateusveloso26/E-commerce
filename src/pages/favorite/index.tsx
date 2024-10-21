import { useContext } from "react";
import { CartContext } from "../../content/CartContext";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

export function Favorite() {
  const { favorites } = useContext(CartContext);

  return (
    <div className="w-full h-screen max-w-7xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-5">
        Itens Favoritos
      </h1>
      {favorites.length === 0 ? (
        <p className="text-center">Nenhum produto favorito adicionado.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {favorites.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
              <Link to={`/product/${item.id}`}>
                <img
                  className="w-full h-60 object-cover rounded-lg mb-2 duration-300 hover:scale-105"
                  src={item.cover}
                  alt={item.title}
                />
                <p className="font-medium mt-1 mb-2 text-center">{item.title}</p>
              </Link>
              <div className="flex justify-between items-center">
                <strong className="text-zinc-700/90">
                  {item.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <button className="p-1 rounded">
                  <FaHeart size={20} color="red" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
