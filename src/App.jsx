import Header from "./components/Header/Header"
import ArticleList from "./components/ArticleList/ArticleList"

const App = () => {
  return (
    <div className="w-screen h-screen sm:px-5 flex flex-col justify-start items-center">
      <Header />
      <ArticleList />
    </div>
  )
}

export default App
