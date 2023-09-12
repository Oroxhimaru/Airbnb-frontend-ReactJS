import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Data from "./Data";


export default function App() {
  const cards = Data.map((item) => {
    return (
      <Cards    
              key={item.id}
              //{...item} one more method but in this you need to remove .item from card.js
              item={item}
              /*img={item.coverImg} other method
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                country={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
                location={item.location}*/
     />
    )
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
                {cards}
            </section>
    </div>
  );
}


