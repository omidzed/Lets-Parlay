import React from 'react';
import { Banner } from './Banner';

type RotatingBannerProps = {
  posters: string[];
};

export function RotatingBanner({ posters }: RotatingBannerProps) {
  return (
    <div className="relative flex justify-center">
      <Banner posters={posters} />
    </div>
  );
}
