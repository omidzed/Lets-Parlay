import { RotatingBanner } from './RotatingBanner';

export const EventsCarousel = () => {
  const posters = ['images/2024-09-28.png', 'images/2024-10-12.png'];

  return (
    <div className="mt-2">
      <RotatingBanner posters={posters} />
    </div>
  );
};

// import { RotatingBanner } from './RotatingBanner';
// import { cleanupPDTFiles } from '../../utils/cleanupPDTFiles';

// export const EventsCarousel = () => {
//   const posters = [
//     'images/2024-09-07T16:00:00Z.png',
//     'images/2024-09-14T16:00:00Z.png',
//     'images/2024-09-28T16:00:00Z.png',
//   ];

//   const currentPosters = cleanupPDTFiles(posters);
//   const currentPosterPaths = cleanupPDTFiles(
//     posters.map((poster) => poster.slice(7))
//   );
//   console.log('current', currentPosters);
//   return (
//     <div className="mt-2">
//       <RotatingBanner posters={currentPosterPaths} />
//     </div>
//   );
// };
