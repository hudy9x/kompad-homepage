import { doc } from "firebase/firestore";
import { db } from "./firebase";
import passwordValidator from "password-validator";
import { Timestamp } from "firebase/firestore";

export const calculateCost = (
  unit: number,
  monthlyCost: number = 3,
  yearlyCost: number = 25
) => {
  const subtotal = unit < 12 ? unit * monthlyCost : yearlyCost;
  const tax = +(subtotal * 0.1).toFixed(2);
  const save = subtotal === yearlyCost ? unit * monthlyCost : 0;

  return {
    subTotal: subtotal,
    tax,
    total: subtotal + tax,
    save,
    savePercent: Math.floor(
      ((monthlyCost * 12 - yearlyCost) * 100) / (monthlyCost * 12)
    ),
  };
};

export const toVND = (price: number) => {
  return usdToVND(price).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

export const usdToVND = (money: number) => money * 23000;

export const _doc = (collection: string) => (id: string) => {
  return doc(db, collection, id);
};

export const otpGenerator = (length: number) => {
  let otp = "";
  const charset = "0123456789abcdefghijklmnopqrstuvwxyz";
  const values = new Uint32Array(length);
  window.crypto.getRandomValues(values);
  for (let i = 0; i < length; i++) {
    otp += charset[values[i] % charset.length];
  }
  return otp;
};

const pwdSchema = new passwordValidator();

pwdSchema
  .is()
  .min(8)
  .is()
  .max(16)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits(1)
  .has()
  .not()
  .spaces();

export const isValidPassword = (pwd: string): boolean => {
  return pwdSchema.validate(pwd) as boolean;
};

export const isSamePassword = (pwd1: string, pwd2: string): boolean => {
  return pwd1 === pwd2;
};

export const toTimestamp = (d: string) => {
  return Timestamp.fromDate(new Date(d));
};


