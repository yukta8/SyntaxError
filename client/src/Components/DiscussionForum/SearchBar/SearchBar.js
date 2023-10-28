import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./List";
import Categories from "../Categories";
import "./SearchBar.css";

export const SearchBar = ({ filterItems }) => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <header className="discussion-header">
        <div className="discussion-title">
          <h2>Discussion Forum</h2>
          <div className="underline"></div>
        </div>
        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
      </header>
      {/* <Categories input={inputText}/> */}
      <List input={inputText} filterItems={filterItems} />
    </div>
  );
};
