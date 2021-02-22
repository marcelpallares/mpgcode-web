export const isFuture = (date) => {
  const now = new Date();
  return date > now;
};
