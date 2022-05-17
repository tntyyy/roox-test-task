interface IAddress {
  city: string;
}

interface ICompany {
  name: string;
}

export interface IUser {
  id: number,
  name: string,
  address: IAddress,
  company: ICompany
}

interface IAdressProfile {
  street: string;
  city: string;
  zipcode: string;
}

export interface IUserProfile {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAdressProfile;
  phone: string;
  website: string;
}