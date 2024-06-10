import pices1 from "/assets/Hero-IMG/download-1.webp";
import pices2 from "/assets/Hero-IMG/download-2.webp";
import pices3 from "/assets/Hero-IMG/download-3.webp";
import pices4 from "/assets/Hero-IMG/download-4.webp";
import pices5 from "/assets/Hero-IMG/download-5.webp";

import download1 from "/assets/Icons/download-1.jpg";
import download2 from "/assets/Icons/download-2.jpg";
import download3 from "/assets/Icons/download-3.jpg";
import download4 from "/assets/Icons/download-4.jpg";
import download5 from "/assets/Icons/download-5.jpg";
import download6 from "/assets/Icons/download-6.jpg";
import download7 from "/assets/Icons/download-7.jpg";
import download8 from "/assets/Icons/download-8.jpg";
import download9 from "/assets/Icons/download-9.jpg";



// "When I deployed my app on Netlify, the images were not showing up because I could't import them in "data.json"
// I had to update my code to import all the images and map them again in the components.
// It worked fine on my local machine, but there was an issue after deploying.
// So i have to code this bellow imgdata."



export const Herodata = [
  {
    img: pices5,
    title: "Best Truewireless", price: "Grab Now"
  },
  { img: pices4, title: "Noise Smartwatches", price: "From ₹1,099 " },

  {
    img: pices3,
    title: "Top Selling Dell",
    price: "From ₹229",
  },
  {
    img: pices2,
    title: "Best Selling Accessories",
    price: "From ₹499",
  },
  {
    img: pices1,
    title: "Best Selling Mobile",
    price: "From ₹499",
  },
];


export const imgdata = [
  download1,
  download2,
  download3,
  download4,
  download5,
  download6,
  download7,
  download8,
  download9,
];
