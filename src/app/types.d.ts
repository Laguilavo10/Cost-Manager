export enum TypeMovement {
  INCOME = 1,
  EXPENSE = 2
}

export enum MethodPayment {
  OTHER = 1,
  CASH = 2,
  CREDIT_CARD = 3,
  NEQUI = 4,
  DAVIPLATA = 5
}

export interface Movement {
  idMovement: string
  userId: string
  typeId: TypeMovement
  createdAt: Date | string
  description: string
  value: number
  methodPaymentId: MethodPayment
}

export interface Balance {
  idBalance: number
  userId: string
  month: number | string
  year: number
  earnings?: number
  expenses?: number
}
