import React, { useEffect, useState } from "react";
import "./App.css";
import "h8k-components";
import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [articleList, setArticleItems] = useState(articles);

  const sortArticlesByDate = () => {
    setArticleItems((data) => {
      const tobeSorted = [...data];
      tobeSorted.sort((artA, artB) => {
        return new Date(artA.date) - new Date(artB.date);
      });
      return tobeSorted;
    });
  };
  const sortArticlesByUpvote = () => {
    const sortedArticles = articleList.sort((artA, artB) => {
      return artA.upvotes - artB.upvotes;
    });
    setArticleItems((prevData) => {
      const sortedArticles = [...prevData];
      sortedArticles.sort((artA, artB) => {
        return artA.upvotes - artB.upvotes;
      });
      return sortedArticles;
    });
    console.log(articleList);
  };

  return (
    <div className='App'>
      <h8k-navbar header={title}></h8k-navbar>
      <div className='layout-row align-items-center justify-content-center my-20 navigation'>
        <label className='form-hint mb-0 text-uppercase font-weight-light'>
          Sort By
        </label>
        <button
          data-testid='most-upvoted-link'
          className='small'
          onClick={sortArticlesByUpvote}
        >
          Most Upvoted
        </button>
        <button
          data-testid='most-recent-link'
          className='small'
          onClick={sortArticlesByDate}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={articleList} />
    </div>
  );
}

export default App;
