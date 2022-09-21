import { baseNetwork } from "../base/baseNetwork";

export const supplierNetwork = {
  deleteSuppliers: (id) => {
    return baseNetwork.delete(`suppliers/${id}`);
  },
  getAllSuppliers: () => {
    return baseNetwork.getAll("suppliers");
  },
  addSupplier: (value) => {
    console.log(value);
    return baseNetwork.add("suppliers", value);
  },
};
