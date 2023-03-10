import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterSelected,
  sortSeleted,
} from "../../features/filters/filtersSlice";

const Filters = () => {
  const state = useSelector((state) => state.search);
  const [searchInput, setSearchInput] = useState(state);

  const dispatch = useDispatch();

  const handleFilter = (e) => {
    setSearchInput((prv) => {
      return {
        ...prv,
        filter: e.target.value,
      };
    });

    dispatch(filterSelected(e.target.value));
  };

  const handleSortSelected = (e) => {
    setSearchInput((prv) => {
      return {
        ...prv,
        sort: e.target.value,
      };
    });
    dispatch(sortSeleted(e.target.value));
  };

  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            onChange={handleSortSelected}
          >
            <option value="">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            {/* <!-- handle filter on button click --> */}
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-all"
                value={"all"}
                checked={searchInput.filter === "all"}
                className="radio"
                onChange={handleFilter}
              />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-saved"
                className="radio"
                value={"saved"}
                checked={searchInput.filter === "saved"}
                onChange={handleFilter}
              />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Filters;
