import { useState } from "react";

function useSort(data, config) {

  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find(column => column.label === sortBy)
    sortedData = [...data].sort((a,b) => {
      let aSortValue = sortValue(a);
      let bSortValue = sortValue(b);

      const order = (sortOrder === 'asc') ? 1 : -1;

      if(typeof aSortValue === 'string') {
        return aSortValue.localeCompare(bSortValue) * order;
      } else {
        return (aSortValue - bSortValue) * order;
      }
    });
  }

  return {
    setSortColumn, 
    sortBy,
    sortOrder,
    sortedData
  };
}

export default useSort;