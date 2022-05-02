export function formatData(array1) {
  return array1.map((array1Item, index) => {
    return { x: index, y: array1Item[0] };
  });
}
