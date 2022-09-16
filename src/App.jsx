import { useState } from "react"

import Header from "./components/Header/Header"
import ArticleList from "./components/ArticleList/ArticleList"
import Form from "./components/Form/Form"

const App = () => {
  const [user, setUser] = useState()

  const submitForm = (user) => {
    setUser(user)
  }

  return (
    <div className="w-screen h-screen sm:px-5 flex flex-col justify-start items-center">
      <Header user={user?.name} />
      { !!user && <ArticleList /> }
      { !!user || <Form onSubmit={submitForm} /> }
    </div>
  )
}

export default App
