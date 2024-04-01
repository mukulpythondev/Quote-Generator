import axios from "axios";
import XIcon from '@mui/icons-material/X';
import React, { useEffect, useState } from "react";
import loadersvg from "../assets/loader.svg";
import Card from "./Card";
function Cards() {
  const apiKey = "CINx1Szk7ewQfOaS0/0eng==cn4OM5mdppMjx8Cx";
  const categories = [
    "attitude",
    "friendship",
    "funny",
    "intelligence",
    "money",
    "love",
  ]; 
  const [category, setCategory] = useState("success");
  const [quotes, setQuotes] = useState([]);
  const [loader, setloader] = useState(true);
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };
  const fetchData = async () => {
    setloader(true);
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/quotes?category=${category}`,
        {
          headers: {
            "X-Api-Key": apiKey,
          },
        }
      );
      setQuotes(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setloader(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // to limit the 50 words 

  // Twitter share link logic 
  const quote = encodeURIComponent(quotes[0]?.quote);
  const author = encodeURIComponent(quotes[0]?.author);
  const twitterURL = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  return (
    <div className="flex flex-col items-center justify-center pt-10 gap-12 md:gap-8">
     
        <div className="flex flex-wrap md:flex-nowrap  gap-4 justify-center ">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-md ${
                category === cat
                  ? " text-pink-700  border border-white"
                  : "border border-white text-white hover:scale-95"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex p-3 rounded-lg  backdrop-blur-lg backdrop-filter bg-opacity-20 flex-col h-50 w-80 bg-white shadow-lg">
          {quotes.length === 0 || loader ? ( 
            <div className="flex items-center justify-center ">
              <img src={loadersvg} alt="" />
            </div>
          ) : (
            <>
              
        <Card quotes={quotes} />
            </>
          )}
        </div>
        <div className="flex gap-6" >
        <button
          onClick={() => fetchData()}
          className="bg-violet-900 hover:bg-violet-700 hover:scale-95 px-4 py-2 md:px-3 md:py-1 text-white text-xl rounded-md text-center"
        >
          New Quote
        </button>
        <a  href={twitterURL} target="_blank" rel="noopener noreferrer" className='bg-black hover:scale-95   text-white font-bold py-2 px-4 rounded'> Share on <XIcon/> </a>
        </div>
    </div>
  );
}

export default Cards;
