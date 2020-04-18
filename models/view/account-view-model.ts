import { Account } from '../account';
import { AccountService } from '../../services/account.service';
import { TransactionViewModel } from './transaction-view-model';

export class AccountViewModel {
  id: number | null;
  name: string;
  balance: string;
  transactions: Array<TransactionViewModel>;
  topCategories: Array<string>;

  constructor(account: Account, private accountService: AccountService) {
    this.id = account?.id ?? null;
    this.name = account?.name ?? '';
    this.balance = this.convertBalance(account?.balance);
    this.transactions = [];
    this.topCategories = [];
  }

  private convertBalance(balance: number) {
    return balance ? `$${balance.toFixed(2)}` : '';
  }

  async getRecentTransactions() {
    try {
      this.transactions = await this.accountService.getTransactions();
    } catch (error) {
      // Let the user know that getting transactions failed with snackbar or other solution
    }
  }

  getTopCategories() {
    const categories: { [key: string]: number } = {};
    const sorted: Array<[string, number]> = [];

    this.transactions.map((transaction: TransactionViewModel) => {
      if (!categories[transaction.category]) {
        categories[transaction.category] = 0;
      } else {
        categories[transaction.category]++;
      }
    });

    for (var category in categories) {
      sorted.push([category, categories[category]]);
    }

    sorted.sort(function (a, b): number {
      return a[1] - b[1];
    });

    return [sorted[0][0], sorted[1][0], sorted[2][0]];
  }
}
