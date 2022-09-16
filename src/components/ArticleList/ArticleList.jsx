import data from '../../../articles.json'
import Article from '../Article/Article'

const ArticleList = () => {
  return <div className="mt-5 pb-20 sm:mt-0 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-[1600px]">
    {
      data.map((article, index) => <Article key={index} {...article} />)
    }
  </div>
}

export default ArticleList