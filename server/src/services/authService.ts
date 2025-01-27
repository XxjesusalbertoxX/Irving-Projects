
import bcrypt from 'bcrypt';
import fs from 'fs';
import path from 'path';

const usersFile = path.resolve(__dirname, '../../data/user.json');

export function getUsers(): any[] {
  if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, JSON.stringify([])); 
  }
  return JSON.parse(fs.readFileSync(usersFile, 'utf-8'));
}

export function userExists(username: string): boolean {
    const users = getUsers();

    return users.some(user => user.username === username);
  }
  

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export function saveUser(user: {id:number, username: string; password: string, rol: string}) {
  const users = getUsers();
  users.push(user);
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

export async function comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(plainPassword, hashedPassword);
}
