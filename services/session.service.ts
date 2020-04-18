import { UserViewModel } from '../models/view/user-view-model';
import AsyncStorage from '@react-native-community/async-storage';

export class SessionService {
  readonly user: UserViewModel | null;

  constructor() {
    this.user = new UserViewModel(null);
  }

  // This is where I would put user authentication logic: get, set, clear auth, etc.
}
