import _users from '../../../_mocks/users';
import { sleep } from '../../../shared/utils';
import type { UserEntity } from '../entities/user.entity';

export const useUsers = () => {
  const getUsers = async (): Promise<UserEntity[]> => {
    await sleep(2000);
    return _users;
  };

  return { getUsers };
};
