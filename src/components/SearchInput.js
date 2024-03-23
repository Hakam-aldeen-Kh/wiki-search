import React from "react";
import "../css/searchinput.css";

function SearchInput({ term, setTerm }) {
  return (
    <div className="my-3">
      <img
        src="https://en.wikipedia.org/static/images/icons/wikipedia.png"
        alt="wiki-logo"
        className="logo"
      ></img>
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Search in Wikipedia
      </label>
      <input
        type="text"
        className="form-control search-failed"
        placeholder="Enter Here"
        id="exampleFormControlInput1"
        onChange={(e) => {
          setTerm(e.target.value);
        }}
        value={term}
      />
    </div>
  );
}

export default SearchInput;
