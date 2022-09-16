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
      <input type="text" className="alura-input" placeholder="Informe seu nome" />
      <input type="email" className="alura-input" placeholder="Informe seu e-mail" />
      <button type="submit" className="alura-button">Confirmar</button>
    </form>
  )
}

export default Form