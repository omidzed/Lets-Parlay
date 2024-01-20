type BannerProps = {
  posters: string[];
  index: number;
};

export function Banner({ posters, index }: BannerProps) {
  return <img src={posters[index]} />;
}
