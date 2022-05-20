import React from 'react'

import offer1 from "../assets/offer1.jpeg";
import offer2 from "../assets/offer2.jpeg";
import offer3 from "../assets/offer3.jpeg";
import offer4 from "../assets/offer4.jpeg";
export const Offers = () => {
  return (
    <section className="offers">
    <div className="container">
        <img className="offer" src={offer1} />
        <img className="offer" src= {offer2} />
        <img className="offer" src= {offer3} />
        <img className="offer" src= {offer4} />
    </div>
</section>
  )
}
