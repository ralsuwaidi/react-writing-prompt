import { atom } from "recoil";

const orderAtom = atom({
    key: "order",
    default: 'day'
  });
  
export default orderAtom;