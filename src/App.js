import { useState, useEffect } from "react";

import { fetchDataFromApi } from "./Utilities/api.js";

function App() {
  const apiTesting = () => {
    fetchDataFromApi(`/movie/popular`).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    apiTesting();
  }, []);

  return (
    <div className="App">
      <h1> Hello</h1>
    </div>
  );
}

export default App;
