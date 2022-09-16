const Article = ({ title, text, tags, image }) => {
  return <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-xl flex flex-col items-center gap-2">
    <h1 className="mb-2 text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h1>
    <div className="w-full pr-5 flex gap-2 justify-end">
      {
        tags.map(tag => <span key={tag} className="px-4 py-1 bg-alura-100 dark:bg-dark-100 rounded-full text-gray-200 text-xs font-bold uppercase">{tag}</span>)
      }
    </div>
    <div className="flex flex-col gap-1">
      {
        text.map((content, index) => <span key={index} className="text-alura-200 dark:text-gray-400">{content}</span>)
      }
    </div>
    { image && <img className="sm:p-4" src={image} /> }
  </div>
}

export default Article