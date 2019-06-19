import { UserIdentifier } from "./user_identifier";
import { UserFirstName } from "./user_first_name";
import { UserLastName } from "./user_last_name";
import { UserDateOfBirth } from "./user_date_of_birth";
import { UserOrganization } from "./user_organization";

export class User {
  private _identifier: UserIdentifier;
  private _firstName: UserFirstName;
  private _lastName: UserLastName;
  private _dateOfBirth: UserDateOfBirth;
  private _organization: UserOrganization;

  constructor(
    _firstName: UserFirstName,
    _lastName: UserLastName,
    _dateOfBirth: UserDateOfBirth,
    _organization: UserOrganization
  ) {
    this._identifier = UserIdentifier.generate();
    this._firstName = _firstName;
    this._lastName = _lastName;
    this._dateOfBirth = _dateOfBirth;
    this._organization = _organization;
  }

  identifier() {
    return this._identifier;
  }

  firstName() {
    return this._firstName;
  }

  lastName() {
    return this._lastName;
  }

  dateOfBirth() {
    return this._dateOfBirth;
  }

  organization() {
    return this._organization;
  }

  /**
   * フルネームを返す。
   */
  fullName(): string {
    return `${this._lastName.value()} ${this._firstName.value()}`;
  }
}
