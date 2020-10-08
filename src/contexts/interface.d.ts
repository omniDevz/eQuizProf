import { UserProps } from '../services/interface';

export interface IAuthContext {
  signed: boolean;
  user: UserProps | null;
  signIn(username: string, password: string): Promise<void>;
  signOut(): void;
  loading: boolean;
}
