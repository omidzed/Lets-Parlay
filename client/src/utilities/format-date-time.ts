export const formatDateTime = (dateTimeString: Date) => {
  return new Date(dateTimeString).toLocaleDateString('default', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
};
