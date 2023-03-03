import { useEffect, useState } from "react";
import welding1 from './images/welding1.jpg'
import welding2 from './images/welding2.jpg'
import welding3 from './images/welding3.jpg'
import './App.css'


function Carousel() {
  const [index, setIndex] = useState(0);

  const mod = (n, m) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  const cards = [
    {
      id: "1",
      image: welding1,
    },
    {
      id: "2",
      image: welding2,
    },
    {
      id: "3",
      image: welding3,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
      console.log(index);
    }, 3000);
  }, [index]);

  return (

    <div className="carousel">
      {cards.map((item, i) => {
        const indexLeft = mod(index - 1, cards.length);
        const indexRight = mod(index + 1, cards.length);

        let className = "card";

        if (i === index) {
          className = "card card--active";
        } else if (i === indexRight) {
          className = "card card--right";
        } else if (i === indexLeft) {
          className = "card card--left";
        } else className = "card";

        return (
          <img
            key={item.id}
            className={className}
            src={item.image}
            alt="Comic"
          ></img>
        );
      })}
    </div>
  );
}

export default Carousel;
