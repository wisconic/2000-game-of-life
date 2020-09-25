import { numRows, numColumns } from "./constants";

const createEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array(numColumns).fill(0));
  }
  return rows;
};

export default createEmptyGrid;
