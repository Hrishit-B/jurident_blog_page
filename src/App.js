import React from "react";
import Navbar from "./components/layout/Navbar";
import Search from "./components/others/Search";
import Trending from "./components/others/Trending";
import Blogs from "./components/others/Blogs";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Trending />
      <Blogs />
    </div>
  );
}

export default App;
