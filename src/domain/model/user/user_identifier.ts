import UUID from "uuid";

export class UserIdentifier {
  private _value: string;

  private constructor(_value: string) {
    this._value = _value;
  }

  static generate() {
    const identifier = UUID.v4();
    return new UserIdentifier(identifier);
  }

  value() {
    return this._value;
  }

  static of(identifier: string) {
    return new UserIdentifier(identifier);
  }
}
