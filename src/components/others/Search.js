import React from "react";
import { IconContext } from "react-icons";
import { HiTrendingUp } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const Search = () => {
  return (
    <div className="mx-3 px-4 py-5 d-flex justify-content-between">
      <div className="d-flex">
        <IconContext.Provider value={{ style: { fontSize: "35px" } }}>
          <HiTrendingUp />
        </IconContext.Provider>
        <span className="px-1"></span>
        <h6 className="bold-content"> Trending on Jurident</h6>
      </div>

      <form className="form-group Search">
        <input
          class="form-control"
          type="text"
          id="name"
          placeholder="Search"
        />
        <BsSearch style={{ position: "relative", bottom: "50%", left: "3%" }} />
        <RxCross2
          style={{ position: "relative", bottom: "50%", left: "85%" }}
        />
      </form>
    </div>
  );
};

export default Search;
