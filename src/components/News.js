import React from "react";
import NewsItem from "./NewsItem";
import { useEffect } from "react";

const updateNews = async (setArticles, category) => {
  let data = await fetch(
    `https://newsapi.org/v2/everything?q='${category}&apiKey=bc934103a4cd4c0fb6938ff6fe0cb87d`
  );
  let parsedData = await data.json();
  setArticles(parsedData.articles);
};

export default function News(props) {
  useEffect(() => {
    updateNews(props.setArticles, props.category);
  }, [props.category]);
  return (
    <>
      <div className="container my-3">
        <h1>{`Get latest Headlines - ${props.category} category`}</h1>
        <div className="row">
          {props.articles.map((item) => {
            if (item.title!='[Removed]') {
              return (
                <div className="col-md-4 my-3" key={item.url}>
                  <NewsItem
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    img={item.urlToImage}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
