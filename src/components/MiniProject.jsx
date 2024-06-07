import React, { useEffect, useRef } from "react";
// import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    mounted();
  }, []);

  const mounted = () => {
    setupCarousel();
  };

  const setupCarousel = () => {
    const container = document.createElement("div");
    const controls = document.createElement("div");

    carouselRef.current.appendChild(container);
    carouselRef.current.appendChild(controls);
    container.className = "carousel-container";
    controls.className = "carousel-controls";

    carouselData.forEach((item, index) => {
      const carouselItem = item.src
        ? document.createElement("img")
        : document.createElement("div");

      container.appendChild(carouselItem);

      carouselItem.className = `carousel-item carousel-item-${index + 1}`;
      carouselItem.src = item.src;
      carouselItem.setAttribute("loading", "lazy");
      carouselItem.setAttribute("data-index", `${index + 1}`);
    });

    carouselOptions.forEach((option) => {
      const btn = document.createElement("button");
      const axSpan = document.createElement("span");

      axSpan.innerText = option;
      axSpan.className = "ax-hidden";
      btn.appendChild(axSpan);

      btn.className = `carousel-control carousel-control-${option}`;
      btn.setAttribute("data-name", option);

      controls.appendChild(btn);
    });

    setControls([...controls.children]);
  };

  const setControls = (controls) => {
    controls.forEach((control) => {
      control.onclick = (event) => {
        event.preventDefault();
        controlManager(control.dataset.name);
      };
    });
  };

  const controlManager = (control) => {
    if (control === "previous") return previous();
    if (control === "next") return next();
    return;
  };

  const previous = () => {
    carouselData.unshift(carouselData.pop());
    carouselInView.push(carouselInView.shift());

    carouselInView.forEach((item, index) => {
      carouselRef.current.children[
        index
      ].className = `carousel-item carousel-item-${item}`;
    });

    carouselData.slice(0, 5).forEach((data, index) => {
      document.querySelector(`.carousel-item-${index + 1}`).src = data.src;
    });
  };

  const next = () => {
    carouselData.push(carouselData.shift());
    carouselInView.unshift(carouselInView.pop());

    carouselInView.forEach((item, index) => {
      carouselRef.current.children[
        index
      ].className = `carousel-item carousel-item-${item}`;
    });

    carouselData.slice(0, 5).forEach((data, index) => {
      document.querySelector(`.carousel-item-${index + 1}`).src = data.src;
    });
  };

  const carouselOptions = ["previous", "next"];

  const carouselData = [
    { id: "1", src: "http://fakeimg.pl/300/?text=1" },
    { id: "2", src: "http://fakeimg.pl/300/?text=2" },
    { id: "3", src: "http://fakeimg.pl/300/?text=3" },
    { id: "4", src: "http://fakeimg.pl/300/?text=4" },
    { id: "5", src: "http://fakeimg.pl/300/?text=5" },
  ];

  const carouselInView = [1, 2, 3, 4, 5];

  return <div ref={carouselRef} className="w-full"></div>;
};

export default Carousel;
