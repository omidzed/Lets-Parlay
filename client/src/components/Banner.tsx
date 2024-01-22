type BannerProps = {
  posters: string[];
  index: number;
};

export function Banner({ posters, index }: BannerProps) {
  return <img className="w-1/2" src={posters[index]} />;
}
