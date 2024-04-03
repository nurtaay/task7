import { createContext, useState } from "react";
import API from "../config.jsx";

export const ImageContext = createContext();

const ImageContextProvider = (props) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setErr] = useState("");
  const [searchTerm, setSearchTerm] = useState("mountains");
  const handleClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?client_id=${API}&query=${searchTerm}&page=12&per_page=25`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      setResults(result.results);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <ImageContext.Provider
      value={{ results, isLoading, handleClick, searchTerm, setSearchTerm }}
    >
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageContextProvider;
