import React from "react";
import { Button } from "@material-ui/core";

import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays 26 august to 30 august 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation flexibility</Button>
        <Button variant="outlined">Types of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
    </div>
  );
}

export default SearchPage;
