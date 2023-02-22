import { doc } from "firebase/firestore";
import { db } from "./firebase";

export const calculateCost = (unit: number, monthlyCost: number, yearlyCost: number) => {
  const subtotal = unit < 12 ? unit * monthlyCost : yearlyCost;
  const tax = +(subtotal * 0.1).toFixed(2);
  const save = subtotal === yearlyCost ? unit * monthlyCost : 0

  return {
    subTotal: subtotal,
    tax,
    total: subtotal + tax,
    save,
    savePercent: Math.floor((monthlyCost * 12 - yearlyCost) * 100 / (monthlyCost * 12))
  }
}

export const _doc = (collection: string) => ((id: string) => {
  return doc(db, collection, id);
})
