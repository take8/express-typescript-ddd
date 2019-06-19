import moment from "moment";

export class UserDateOfBirth {
  private _value: Date;

  constructor(_value: Date) {
    this._value = _value;
  }

  value() {
    return moment(this._value).format("YYYY-MM-DD");
  }
}
