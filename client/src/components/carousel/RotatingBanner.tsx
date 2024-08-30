import { Banner } from './Banner';

type RotatingBannerProps = {
  posters: string[];
};

export const RotatingBanner = ({ posters }: RotatingBannerProps) => {
  return (
    <div className="flex justify-center mb-6 md:mb-6">
      <Banner posters={posters} />
    </div>
  );
};
