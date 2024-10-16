"use client";
import React, { useState, ChangeEvent } from "react";

// Define the structure of each row's data
interface RowData {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
}

const DaynamicTableAddValue: React.FC = () => {
  // State to store rows of data
  const [rows, setRows] = useState<RowData[]>([
    { col1: "", col2: "", col3: "", col4: "", col5: "" },
  ]);

  // Handler for input change with type definitions
  const handleInputChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const newRows = [...rows];
    newRows[index] = { ...newRows[index], [name]: value };
    setRows(newRows);
  };

  // Handler to add a new row
  const handleAddRow = () => {
    setRows([...rows, { col1: "", col2: "", col3: "", col4: "", col5: "" }]);
  };

  return (
    <div className="mx-auto mt-6">
      <div className="overflow-x-auto">
        <table className="min-w-full border-2 !border-gray-300">
          <thead className="bg-gray-300">
            <tr>
              <th className="border px-4 py-2">Column 1</th>
              <th className="border px-4 py-2">Column 2</th>
              <th className="border px-4 py-2">Column 3</th>
              <th className="border px-4 py-2">Column 4</th>
              <th className="border px-4 py-2">Column 5</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="bg-white">
                <td className="border px-4 py-2">
                  <input
                    className="w-full p-2 border rounded"
                    type="text"
                    name="col1"
                    value={row.col1}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    className="w-full p-2 border rounded !border-gray-300"
                    type="text"
                    name="col2"
                    value={row.col2}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    className="w-full p-2 border rounded !border-gray-300"
                    type="text"
                    name="col3"
                    value={row.col3}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    className="w-full p-2 border rounded !border-gray-300"
                    type="text"
                    name="col4"
                    value={row.col4}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    className="w-full p-2 border rounded !border-gray-300"
                    type="text"
                    name="col5"
                    value={row.col5}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-primary text-white hover:bg-orange-900 rounded-md"
          onClick={handleAddRow}
        >
          Add Row
        </button>
      </div>
    </div>
  );
};

export default DaynamicTableAddValue;
