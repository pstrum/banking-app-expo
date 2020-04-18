import { Transaction } from '../transaction';

export class TransactionViewModel {
  id: number | null;
  amount: string;
  date: Date;
  category: string;

  constructor(transaction: Transaction | null) {
    this.id = transaction?.id ?? null;
    this.amount = transaction?.amount
      ? `$${transaction.amount.toFixed(2)}`
      : '';
    this.date = this.getDate(transaction?.date ?? '');
    this.category = transaction?.category ?? '';

    console.log(this.date);
  }

  private getDate(date: number | '') {
    return new Date(1583266558054);
  }
}
