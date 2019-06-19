import userRepository from "../../infrastructure/datasource/user/user_datasource";
import { UserIdentifier } from "../../domain/model/user/user_identifier";
import { User } from "../../domain/model/user/user";

class UserService {
  constructor() {
  }

  findAll() {
    return userRepository.findAll();
  }

  findBy(identifier: UserIdentifier) {
    return userRepository.findBy(identifier);
  }

  startInput() {
    return User.newInstance();
  }

  create(user: User) {
    return userRepository.create(user);
  }

  update(user: User) {
    return userRepository.update(user);
  }

  delete(identifier: UserIdentifier) {
    return userRepository.delete(identifier);
  }
}

// TODO: 簡易的な singleton
export default new UserService();
