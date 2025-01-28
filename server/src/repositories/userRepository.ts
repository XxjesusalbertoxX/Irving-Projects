import fs from 'fs';
import path from 'path';

class userRepository {
  private usersFilePath = path.resolve(__dirname, '../data/users.json');

  async findByUsername(username: string) {
    const users = await this.getUsersFromFile();
    return users.find(user => user.username === username);
  }

  private async getUsersFromFile() {
    return new Promise<any[]>((resolve, reject) => {
      fs.readFile(this.usersFilePath, 'utf8', (err, data) => {
        if (err) {
          return reject(err);
        }
        resolve(JSON.parse(data));
      });
    });
  }
}

export default new userRepository();
