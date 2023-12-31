declare interface UserProps {
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  phone_number: string;
  id: number;
}

declare namespace User {
  declare enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER",
  }
  declare interface IUser {
    email: string;
    email_verified: boolean;
    misidn: string;
    misidn_verified: boolean;
    role: UserRole;
  }
  declare interface UserProfile {
    _count: {
      author: number;
    };
    firstname: string;
    middlename: string;
    lastname: string;
    avatar: string;
    user: IUser;
    id: number;
  }
}
