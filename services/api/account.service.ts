import { ApiService } from './api.service';
import { User } from '../models/user';

export class AccountService extends ApiService {
  async getUser(userId: number): Promise<User> {
    return await this.get<User>(`/user/${userId}`);
  }
}
