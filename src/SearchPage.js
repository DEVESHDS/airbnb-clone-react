import React from "react";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

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
        <SearchResult
          img="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          location="Private rooms in centre of London"
          title="Stay at this spacious edwardian house"
          description="1 guest * 1 bedroom * 1 bed * 1.5 shared bathroom * wifi * kitchen * free parking * Washing machine"
          star={4.73}
          price="$30/night"
          total="$117"
        />
        <SearchResult
          img="https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=787&q=80"
          location="Private rooms in centre of Wales"
          title="Stay at this spacious Wales house"
          description="1 guest * 1 bedroom * 1 bed * 1.5 shared bathroom * wifi * kitchen * free parking * Washing machine"
          star={4.85}
          price="$35/night"
          total="$137"
        />
        <SearchResult
          img="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          location="Private rooms in centre of New Delhi"
          title="Stay at this spacious Indian house"
          description="1 guest * 1 bedroom * 1 bed * 1.5 shared bathroom * wifi * kitchen * free parking * Washing machine"
          star={4.99}
          price="$10/night"
          total="$80"
        />
        <SearchResult
          img="https://images.unsplash.com/photo-1601221998768-c0cdf463a393?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80"
          location="Private rooms in centre of New York"
          title="Stay at this spacious house"
          description="1 guest * 1 bedroom * 1 bed * 1.5 shared bathroom * wifi * kitchen * free parking * Washing machine"
          star={4.79}
          price="$60/night"
          total="$217"
        />
      </div>
    </div>
  );
}

export default SearchPage;
