import { User } from '../types/user';

export const validateEmail = (email: string) => {
  const regex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return !!email.toLowerCase().match(regex);
};

interface sortArrayByUserNameProps {
  users: User[];
  isReverse?: boolean;
}

export const sortArrayByUserName = ({
  users,
  isReverse = false
}: sortArrayByUserNameProps): User[] => {
  if (users.length <= 0) return [];

  function compare(a: User, b: User) {
    if ((a.username as string) < (b.username as string)) {
      return -1;
    }
    if ((a.username as string) > (b.username as string)) {
      return 1;
    }
    return 0;
  }
  const data = users.sort(compare);
  return isReverse ? data.reverse() : data;
};
