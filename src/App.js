import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";
import usePrevState from "./hooks/usePrevState";

function App() {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  const prevState = usePrevState(term);

  useEffect(() => {
    const search = async () => {
      const respond = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResult(respond.data.query.search);
    };

    if (!result.length) {
      if (term) {
        search();
      }
    } else if (prevState !== term) {
      const t = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1500);
      return () => {
        clearTimeout(t);
      };
    }
  }, [term, result.length, prevState]);

  return (
    <div className="container">
      <SearchInput term={term} setTerm={setTerm} />
      <SearchResult result={result} />
    </div>
  );
}

export default App;
