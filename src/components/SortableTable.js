import useSort from '../hooks/use-sort';
import { GoArrowUp, GoArrowDown } from 'react-icons/go'
import Table from "./Table";

function SortableTable(props) {

  const { config, data } = props;
  const { setSortColumn, sortBy, sortOrder, sortedData} = useSort(data, config);

  const getIcons = (label, sortBy, sortOrder) => {
    if (label !== sortBy) {
      return (
        <div className="">
          <GoArrowUp/>
          <GoArrowDown/>
        </div>
      );
    }

    if (sortOrder === null) {
      return <div className="">
        <GoArrowUp/>
        <GoArrowDown/>
      </div>
    } else if(sortOrder === 'asc') {
      return <div className="">
        <GoArrowUp/>
      </div>
    } else if(sortOrder === 'desc') {
      return <div className="">
        <GoArrowDown/>
      </div>
    }
  }

  const updatedConfig = config.map((column) => {
    if(!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th 
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      )
    };
  });

  return <Table {...props} config={updatedConfig} data={sortedData}/>
}

export default SortableTable;