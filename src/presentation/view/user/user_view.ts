import { User } from "../../../domain/model/user/user";
import { UserFirstName } from "../../../domain/model/user/user_first_name";
import { UserLastName } from "../../../domain/model/user/user_last_name";
import { UserDateOfBirth } from "../../../domain/model/user/user_date_of_birth";
import { UserOrganization } from "../../../domain/model/user/user_organization";

interface UserObject {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  organization: string;
}

/**
 * リクエストボディとドメインモデルの変換を行う。
 */
class UserView {
  constructor() {
  }

  toDomain(body: UserObject): User {
    return new User(
      new UserFirstName(body.firstName),
      new UserLastName(body.lastName),
      new UserDateOfBirth(body.dateOfBirth),
      new UserOrganization(body.organization)
    );
  }
}

export default new UserView();
