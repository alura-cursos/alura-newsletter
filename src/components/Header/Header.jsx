import ToggleTheme from "../ToggleTheme/ToggleTheme"

const Header = () => {
  return (
    <div className="p-5 w-full sm:m-5 sm:rounded-xl bg-alura-200 dark:bg-dark-200 flex justify-between items-center">
      <span className="text-gray-100">Olá, Usuário</span>
      <h1 className="text-gray-100 text-2xl sm:text-4xl">Alura Newsletter</h1>
      <ToggleTheme />
    </div>
  )
}

export default Header