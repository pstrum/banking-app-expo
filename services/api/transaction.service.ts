import { ApiService } from './api.service';
import { Transaction } from '../models/transaction';

export class TransactionService extends ApiService {
  async getTransactions(
    offset: number = 0,
    limit: number = 10
  ): Promise<Array<Transaction>> {
    return this.get<Array<Transaction>>(
      `/transactions?offset=${offset}&limit=${limit}`
    );
  }
}
