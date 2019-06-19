import { UserRepository } from "../../../domain/model/user/user_repository";

import { UserList } from "../../../domain/model/user/user_list";
import { User } from "../../../domain/model/user/user";
import { UserIdentifier } from "../../../domain/model/user/user_identifier";
import { UserLastName } from "../../../domain/model/user/user_last_name";
import { UserFirstName } from "../../../domain/model/user/user_first_name";
import { UserDateOfBirth } from "../../../domain/model/user/user_date_of_birth";
import { UserOrganization } from "../../../domain/model/user/user_organization";

import moment from "moment";

class UserDatasource implements UserRepository {
  // TODO: dummy
  private dataMap: { [index: string]: User } = {};

  constructor() {
    const user1 = new User(
      new UserFirstName("太郎"),
      new UserLastName("山田"),
      new UserDateOfBirth(moment("1999-11-22").toDate()),
      new UserOrganization("A社")
    );
    const user2 = new User(
      new UserFirstName("次郎"),
      new UserLastName("鈴木"),
      new UserDateOfBirth(moment("2001-04-30").toDate()),
      new UserOrganization("B社")
    );
    this.dataMap[user1.identifier().value()] = user1;
    this.dataMap[user2.identifier().value()] = user2;
  }

  findAll(): UserList {
    return new UserList(Object.values(this.dataMap));
  }

  findBy(identifier: UserIdentifier): User {
    return this.dataMap[identifier.value()];
  }

  create(user: User): void {
    this.dataMap[user.identifier().value()] = user;
  }

  update(user: User): void {
    throw new Error("Method not implemented.");
  }

  delete(identifier: UserIdentifier): void {
    throw new Error("Method not implemented.");
  }
}

export default new UserDatasource();
