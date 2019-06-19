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

  private constructor() {
    this._identifier = UserIdentifier.generate();
  }

  static newInstance() {
    return new User();
  }

  static of(
    _firstName: UserFirstName,
    _lastName: UserLastName,
    _dateOfBirth: UserDateOfBirth,
    _organization: UserOrganization
  ) {
    const user = new User();
    user._firstName = _firstName;
    user._lastName = _lastName;
    user._dateOfBirth = _dateOfBirth;
    user._organization = _organization;
    return user;
  }

  static withIdentifier(
    _identifier: UserIdentifier,
    _firstName: UserFirstName,
    _lastName: UserLastName,
    _dateOfBirth: UserDateOfBirth,
    _organization: UserOrganization
  ) {
    const user = User.of(_firstName, _lastName, _dateOfBirth, _organization);
    user._identifier = _identifier;
    return user;
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
