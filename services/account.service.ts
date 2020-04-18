import { TransactionViewModel } from '../models/view/transaction-view-model';
import { AccountApiService } from './api/account.service';

export class AccountService {
  constructor(private accountApiService: AccountApiService) {}

  async getTransactions(): Promise<Array<TransactionViewModel>> {
    const transactions = await this.accountApiService.getTransactions();
    return transactions.map(
      (transaction) => new TransactionViewModel(transaction)
    );
  }
}
