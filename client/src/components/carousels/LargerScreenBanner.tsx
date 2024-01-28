// import { useEffect, useState } from 'react';

// type BannerProps = {
//   posters: string[];
// };

// export function                                     ({ posters }: BannerProps) {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {

//        const nextImage = () => {
//     setIndex((prevIndex) => (prevIndex + 1) % posters.length);
//   };
//   }

//   // function handleNextClick() {
//   //   console.log('index', index);
//   //   console.log('posters', posters.length);
//   //   index < posters.length - 1 ? setIndex(index + 1) : setIndex(0);
//   // }

//   return (
//     <div className="flex justify-center overflow-hidden">
//       <{images.map((image, index) => (
//   <img
//     key={index}
//     src={image}
//     className={`transform transition-transform duration-500 ease-out ${index === currentImageIndex ? 'scale-100 z-10' : 'scale-50'}`}
//     alt="Carousel item"
//   />

//     </div>
//   );
// }
