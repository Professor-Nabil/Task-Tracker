export const generateId = (tasks) => {
  if (!tasks || tasks.length === 0) return 1;

  // Find the highest ID and add 1
  const ids = tasks.map((task) => task.id);
  return Math.max(...ids) + 1;
};
