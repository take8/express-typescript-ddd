import { UserIdentifier } from "./user_identifier";
import { User } from "./user";
import { UserList } from "./user_list";

export interface UserRepository {
  findAll(): UserList;

  findBy(identifier: UserIdentifier): User;

  create(user: User): void;

  update(user: User): void;

  delete(identifier: UserIdentifier): void;
}
