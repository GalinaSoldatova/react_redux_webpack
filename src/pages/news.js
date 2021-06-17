import React, { useState } from 'react';
import Article from '../components/article';

function News() {
  const [state, setState] = useState(undefined);

  React.useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=ru&apiKey=dd22d108371249aab6de86b570fbf8e1';
    fetch(url)
      .then(res => res.json())
      .then(el => setState([...el.articles]));
  }, []);

  return (
    <div className='wrapper'>
      <div className='news header'>
        <h1>Лента новостей</h1>
      </div>
      <div className='news list'>
        {state && state.map(
          (article, index) => <Article
            key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            author={article.author}
            urlToImage={article.urlToImage}
          />
        )}
      </div>
    </div>
  );
}

export default News;
