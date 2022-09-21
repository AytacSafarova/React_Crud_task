import React, { useEffect, useState } from "react";
import { supplierNetwork } from "../network/requests/supplierNetwork";

function SupplierTable() {
  const [suppliers, setsuppliers] = useState([]);
  const [inputvalue, setInputvalue] = useState({
    companyName: "",
  });

  useEffect(() => {
    supplierNetwork.getAllSuppliers().then((data) => {
      setsuppliers(data);
    });
  }, []);

  function deleteItem(id) {
    supplierNetwork.deleteSuppliers(id);
    supplierNetwork.getAllSuppliers().then((data) => {
      setsuppliers(data);
    });
  }

  function addItem(inputvalue) {
    console.log(inputvalue);
    supplierNetwork.addSupplier(inputvalue);
  }

  return (
    <>
      <input
        onChange={(e) => setInputvalue({ companyName: e.target.value })}
      ></input>
      <button onClick={() => addItem(inputvalue)}>Add</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Company Name</th>
            <th>Contact Name</th>
            <th>Contact Title</th>
          </tr>
        </thead>
        <tbody>
          {suppliers &&
            suppliers.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{item.id}</td>
                  <td>{item.companyName}</td>
                  <td>{item.contactName}</td>
                  <td>{item.contactTitle}</td>
                  <td onClick={() => deleteItem(item.id)}>Delete</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default SupplierTable;
