import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer className="w-full flex  h-24  flex-col items-center justify-center bg-black">
      <Link to="/" className="font-bold text-3xl text-white my-2">
        <span className="text-red-600 uppercase">TECH</span> Shop
      </Link>

      <p className="font-medium text-center text-white">
        © 2024 DEV Shop - Todos os Direitos Reservados.
      </p>
    </footer>
  );
}
