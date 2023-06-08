import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogData } from "./components/dummyData";
import Navbar from "./components/layout/Navbar";
import Search from "./components/others/Search";
import Trending from "./components/others/Trending";
import Blogs from "./components/blogs/Blogs";
import Blog from "./components/blogs/Blog";

import "./App.css";

function App() {
  const [blog, setBlog] = useState([]);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchBlogs = (name) => {
    BlogData.filter((item) => item.topic === name).map((item) => setBlog(item));
  };

  const clearBlogs = () => {
    setBlog([]);
    setLoading(false);
  };

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Fragment>
                <Navbar />
                <Search
                  searchBlogs={searchBlogs}
                  clearBlogs={clearBlogs}
                  showClear={blog.length > 0 ? true : false}
                  setAlert={showAlert}
                />
                <Trending />
                <Blogs />
              </Fragment>
            }
          />
          <Route exact path="/:topic" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
