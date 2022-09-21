import { v4 as uuidV4 } from "uuid";

class User {
  // Complete aqui
  id: string;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  admin: boolean;

  constructor(name?: string, email?: string) {
    this.id = uuidV4();
    this.name = name;
    this.email = email;
    this.created_at = new Date();
    this.updated_at = new Date();
    this.admin = false;
  }
}

export { User };
