export function formatData(array1, array2) {
  return array1.map((array1Item, index) => {
    return { x: array1Item, y: array2[index] };
  });
}
