/**
 * Generic Utility to remove an object from an array by ID
 * @param {Array} tasksArr
 * @param {Number|String} id
 * @returns {Object|null} - Returns the deleted task so the View can confirm it
 */
export const deleteTaskFromArray = (tasksArr, id) => {
  const numericId = Number(id);
  const index = tasksArr.findIndex((task) => task.id === numericId);

  if (index < 0) return null;

  // Grab the task before we delete it (to return it to the controller)
  const deletedTask = tasksArr[index];

  // Modify the array by removing 1 element at the found index
  tasksArr.splice(index, 1);

  return deletedTask;
};

// NOTE: 🔍 Why use splice instead of filter here?
//
// You might see some developers use tasks.filter(t => t.id !== id).
// While that works,
// filter creates a new array.
// Since we discussed Pass-by-Reference,
// using splice modifies the original array in memory.
// It's a bit more memory-efficient
// and keeps your "reference" logic consistent across all services.
