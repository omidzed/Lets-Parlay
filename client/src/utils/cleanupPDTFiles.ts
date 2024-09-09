export const cleanupPDTFiles = (files) => {
  const now = new Date();
  const cutoffTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    22,
    0,
    0
  ); // 10 PM PDT

  return files.filter((file) => {
    const fileDate = new Date(file.slice(0, 19));
    fileDate.setHours(fileDate.getHours() - 7); // Adjust for PDT time zone
    return fileDate.getTime() >= cutoffTime.getTime();
  });
};
