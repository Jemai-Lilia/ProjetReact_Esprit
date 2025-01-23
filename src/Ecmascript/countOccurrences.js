const countOccurrences = (nestedArray) => {
  // Aplatir le tableau imbriqué en un seul tableau
  const flattenedArray = nestedArray.flat();

  // Utiliser reduce() pour compter les occurrences
  const occurrences = flattenedArray.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1; // Incrémente la valeur ou initialise à 1
    return acc;
  }, {}); // Initialisation avec un objet vide

  return occurrences;
};
const inputArray = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"]
];

console.log(countOccurrences(inputArray));
