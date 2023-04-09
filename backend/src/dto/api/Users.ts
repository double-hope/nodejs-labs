import { UserDto } from '../Users';

interface UsersApiDto {
    users: UserDto[];
    setUsers: (category: UserDto[]) => void;
}

export { UsersApiDto };