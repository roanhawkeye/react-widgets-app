import React, { useEffect, useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  console.log("I run with every render!");

  useEffect(() => {
    console.log("I run at every re-render");
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
