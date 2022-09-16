import Input from "../Input/Input"

const Form = ({ onSubmit }) => {
  const safeSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    const name = event.target[0].value
    const email = event.target[1].value
    onSubmit({ name, email })
  }

  return (
    <form className="h-full w-full px-5 pt-52 flex flex-col items-center gap-10" onSubmit={safeSubmit}>
      <Input type="text" placeholder="Informe seu nome" />
      <Input type="email" placeholder="Informe seu e-mail" />
      <button type="submit" className="bg-alura-100 px-5 py-2 text-gray-200 uppercase rounded-full hover:animate-pulse outline-none focus:shadow-md focus:shadow-gray-500">Confirmar</button>
    </form>
  )
}

export default Form