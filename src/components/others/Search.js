import React from "react";

const Search = () => {
  return (
    <div className="mx-3 px-4 py-5 d-flex justify-content-between">
      <div className="d-flex">
        <i class="fa fa-arrow-up"></i>
        <h6 className="bold-content"> Trending on Jurident</h6>
      </div>

      <form className="form-group Search">
        <input
          class="form-control"
          type="text"
          id="name"
          placeholder="    Search"
        />
        <i className="fa fa-search" id="search-icon"></i>
        <i className="fa fa-times-circle" id="delete-icon"></i>
      </form>
    </div>
  );
};

export default Search;
