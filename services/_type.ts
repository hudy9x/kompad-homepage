import { Timestamp } from "firebase/firestore";

export interface IPlan {
  id?: string;
  uid: string;
  maxRecord: number;
  currentRecord: number;
  maxStorageSize: number;
  currentStorageSize: number;
  expiredTime: Timestamp;
  prevExpiredTime?: Timestamp;
}

export enum TransactionStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED'
}

export enum PaymentMethod {
  BANK = 'BANK',
  PAYPAL = 'PAYPAL',
}

export interface ITransaction {
  uid: string
  createdAt: Timestamp
  updatedAt: Timestamp
  amount: number
  unit: number
  method: PaymentMethod
  currency: string
  email: string
  status: TransactionStatus
  history: string
  code: string
}

