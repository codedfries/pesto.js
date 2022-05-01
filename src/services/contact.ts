import { IContact } from '../types/contact';
import { Login } from './login';
import { Random } from './random';

const email = (firstname?: string, lastname?: string): string => {
	const suffix = '@pesto.example.com';
	return !firstname || !lastname ? `${Login.username()}${suffix}` : `${firstname}.${lastname}${suffix}`;
};

const phone = (): string => {
	const country = Random.number(11, 99);
	const prefix = Random.number(101, 999);
	const suffix = Random.number(1000001, 9999999);

	return `+${country} ${prefix} ${suffix}`;
};

const contact = (firstname?: string, lastname?: string): IContact => {
	return {
		email: email(firstname, lastname),
		phone: phone(),
		mobile: phone(),
	};
};

export const Contact = {
	email: (firstname?: string, lastname?: string) => email(firstname, lastname),
	phone: () => phone(),
	contact: (firstname?: string, lastname?: string) => contact(firstname, lastname),
};
