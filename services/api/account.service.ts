import { ApiService } from './api.service';
import { User } from '../../models/user';
import { Transaction } from '../../models/transaction';

export class AccountApiService extends ApiService {
  async getUser(userId: number): Promise<User> {
    return await this.get<User>(`/user/${userId}`);
  }

  async getTransactions(): Promise<Array<Transaction>> {
    // return await this.get<Array<Transaction>>('/transactions');

    // use fake data
    return require('../../mocks/account.response.json');
  }
}
