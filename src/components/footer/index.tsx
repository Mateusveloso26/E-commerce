import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer className="w-full flex mt-20   h-24  flex-col items-center justify-center bg-slate-200">

      <Link to="/" className="font-bold text-3xl my-2">
        <span className="text-red-600 uppercase">Dev</span> Shop
      </Link>

      <p className="font-medium text-center">© 2024 DEV Shop - Todos os Direitos Reservados.</p>
    </footer>
  );
}
