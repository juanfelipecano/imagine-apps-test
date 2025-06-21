import _usersAuth from '../../../_mocks/users-auth';
import { sleep } from '../../../shared/utils';
import type { CredentialsEntity, UserEntity } from '../entities';

export const useAuthentication = () => {

  const authenticate = async (credentials: CredentialsEntity): Promise<UserEntity> => {
    await sleep(1000);

    const { email, password } = credentials;

    const user = _usersAuth.find(
      (item) => item.email === email && item.password === password
    );

    if (user) {
      return user as UserEntity;
    } else {
      throw new Error('Invalid Credentials');
    }
  }

  return {
    authenticate,
  }
}
