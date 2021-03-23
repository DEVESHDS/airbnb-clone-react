import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://images.unsplash.com/photo-1580738955750-c9b0f1f7c486?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=757&q=80"
          title="Online Experiences"
          description="Unique activities we can do together,led by world of hosts"
        />
        <Card
          src="https://images.unsplash.com/photo-1595446757331-795d866924a9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep"
        />
        <Card
          src="https://images.unsplash.com/photo-1600786288830-9f5d4bf1d516?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
          title="Entire homes"
          description="Comfortable privatye places with rooms for family and friends"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://images.unsplash.com/photo-1568941159284-3b299541ee63?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
          title="3 bedroom flat in Bournemouth"
          description="Superhost with the stunning view of beach in Bournemouth"
          price="$130/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1591825381767-c7137b8eda0f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with his amazing penthouse"
          price="$350/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1604629761628-5640ee399e18?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
          title="1 Bedroom apartment"
          description="Superhost with greatest amenities and fabulous shopping centre nearby"
          price="$80/night"
        />
      </div>
    </div>
  );
}

export default Home;
