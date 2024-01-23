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

export enum Category {
  OTHERS = 1,
  FOOD = 2,
  HOUSING = 3,
  TRANSPORTATION = 4,
  ENTERTAINMENT = 5,
  HEALTH = 6,
  EDUCATION = 7,
  CLOTHING = 8
}

export interface Movement {
  idMovement: string
  userId: string
  typeId: TypeMovement
  createdAt: Date | string
  description: string
  value: number
  methodPaymentId: MethodPayment
  categoryId: Category
}

export interface Balance {
  idBalance: number
  userId: string
  month: number | string
  year: number
  earnings?: number
  expenses?: number
}

export interface NewMovement {
  date?: Date
  typeMovement: TypeMovement
  description: string
  amount: number
  methodPayment: MethodPayment
  category: Category
}

export interface UpdateMovement
  extends Omit<Movement, 'idMovement' | 'userId'> {}
