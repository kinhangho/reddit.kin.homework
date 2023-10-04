/**
 * Generates a random integer between min (inclusive) and max (inclusive).
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} A random integer between min and max (inclusive).
 */
export default function getRandomNumber(min, max) {
  // Ensure min and max are integers
  min = Math.ceil(min);
  max = Math.floor(max);
  
  if (min > max) {
    throw new Error('Min cannot be greater than max');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
