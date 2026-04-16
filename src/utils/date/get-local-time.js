export const getLocalTime = () => {
  const now = new Date();

  // This adjusts the date to your local timezone (Africa/Algiers)
  // and returns it in a format similar to ISO
  const offset = now.getTimezoneOffset() * 60000; // offset in milliseconds
  const localISOTime = new Date(now - offset).toISOString().slice(0, -1);

  return localISOTime;
};
