import UserRepository from '../repositories/userRepository';
import bcrypt from 'bcrypt';

class UserValidator {
  async validate(username: string, password: string) {
    const user = await UserRepository.findByUsername(username);
    if (!user) {
      throw new Error('User not found');
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error('Invalid password');
    }

    return user;
  }
}

export default new UserValidator();
