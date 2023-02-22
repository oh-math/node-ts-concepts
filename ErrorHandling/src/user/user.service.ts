import { randomUUID } from "crypto";
import { User } from "./user.type";

export class UserService {
  private data: User[] = [];

  public createUser(user: { email: string; name: string }) {
    const { email, name } = user || {};

    const result = this.data.push({
      id: randomUUID(),
      email,
      name,
    });

    return result;
  }

  public getAllUsers(): User[] {
    const result = this.data;

    return result;
  }

  public getUser(id: string): User | undefined {
    const result = this.data.find((index) => index.id === id);

    return result;
  }
}
