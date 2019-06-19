import { User } from "./user";

export class UserList {
  private _values: User[];

  constructor(_values: User[]) {
    this._values = _values;
  }

  values() {
    return this._values;
  }
}
