/**
 * Generic Utility to update an object within an array
 * @param {Array} tasksArr - The current list of tasks
 * @param {Object} updateData - Object containing the ID and the fields to change
 * @returns {Object|null} - The updated task or null
 */
export const updateTaskInArray = (tasksArr, updateData) => {
  updateData.id = Number(updateData.id);
  const { id } = updateData;
  const index = tasksArr.findIndex((task) => task.id === id);

  if (index < 0) return null;

  // Merge existing task with new data
  // This overwrites existing properties with whatever is in updateData
  tasksArr[index] = {
    ...tasksArr[index],
    ...updateData,
  };

  return tasksArr[index];
};
