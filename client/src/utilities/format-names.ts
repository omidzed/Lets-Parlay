export const formatLongName = (name: string): string => {
  const parts = name.split('-');
  if (parts.length > 2) {
    return parts.slice(Math.ceil(parts.length / 4)).join(' ');
  }
  return name;
};
