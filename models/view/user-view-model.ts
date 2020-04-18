import { User } from '../user';

export class UserViewModel {
  id: number | null;
  phone: string;
  email: string;
  name: string;

  constructor(user: User | null) {
    this.id = user?.id ?? null;
    this.phone = user?.name ?? '';
    this.email = user?.email ?? '';
    this.name = user?.phone ?? '';
  }
}
