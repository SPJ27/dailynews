import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
// import 

function App() {
  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState('General');
  return (
    <>
      <Navbar setCategory={setCategory}/>
      <News category={category} articles={articles} setArticles={setArticles} />
    </>
  );
}

export default App;
