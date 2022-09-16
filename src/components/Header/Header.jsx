const Header = () => {
  return (
    <div className="p-5 sm:m-5 sm:rounded-xl bg-gray-800 flex justify-between items-center">
      <span className="text-gray-100">Olá, Usuário</span>
      <h1 className="text-gray-100 text-2xl sm:text-4xl">Alura Newsletter</h1>
      <span className="hidden sm:block text-gray-100">TEMA</span>
    </div>
  )
}

export default Header