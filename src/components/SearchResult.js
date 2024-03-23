import React from "react";
import "../css/searchresult.css";

function SearchResult({ result }) {
  const fetchResult = result.map((res) => (
    <tr key={res.pageid}>
      <th scope="row">{res.pageid}</th>
      <td>
        {" "}
        <a href={`https://en.wikipedia.org/wiki/${res.title}`} target="_blank">
          {res.title}
        </a>
      </td>
      <td className="des">
        {" "}
        <span dangerouslySetInnerHTML={{ __html: res.snippet }}></span>{" "}
      </td>
    </tr>
  ));

  return (
    <div className="row">
      <div className="col">
        {fetchResult.length !== 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>{fetchResult}</tbody>
          </table>
        ) : (
          <p className="no-res">No Results</p>
        )}
      </div>
    </div>
  );
}

export default SearchResult;
