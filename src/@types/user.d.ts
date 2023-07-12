declare interface UserProps {
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  phone_number: string;
  id: number;
}

declare namespace User {
  declare interface IUser {
    email: string;
    email_verified: boolean;
    misidn: string;
    misidn_verified: boolean;
  }
  declare interface UserProfile {
    _count: {
      author: number;
    };
    firstname: string;
    middlename: string;
    lastname: string;
    user: IUser;
    id: number;
  }
}
