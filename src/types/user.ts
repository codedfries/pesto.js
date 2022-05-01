import { IContact } from './contact';

export type IGender = 'male' | 'female';
export type ITitle = 'Mr.' | 'Mrs.';

export interface IAdress {
	street?: string;
	houseNo?: number;
	postcode?: string;
	city?: string;
	state?: string;
}

export interface IUser {
	id?: string;
	gender?: IGender;
	title?: string;
	salutation?: string | boolean;
	firstname?: string | boolean;
	lastname?: string | boolean;
	birthday?: Date;
	esel?: string | boolean;
	adress?: IAdress;
	contact?: IContact;
	login?: ILogin;
}

export interface ILogin {
	id?: string;
	username?: string;
	email?: string;
	password?: string;
}

export interface IUserListOptions {
	length: number;
}
