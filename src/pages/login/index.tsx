export function Login() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-100">
        <form className="flex justify-center w-1/5 flex-col gap-4 ">
          <h1 className="text-3xl font-bold text-center mb-4">LOGIN</h1>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="techshop@gmail.com"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="senha" className="mb-2 font-semibold">Senha</label>
            <input
              type="password"
              name="senha"
              id="senha"
              placeholder="**********"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <input
            type="submit"
            value="LOGAR"
            className="p-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 transition duration-200"
          />
        </form>
      </div>
    );
  }
  