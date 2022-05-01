import { LASTNAMES } from '../constants/lastnames';
import { ILogin } from '../types/user';
import { Contact } from './contact';
import { Random } from './random';

const username = () => {
	return `${Random.arrayItem(LASTNAMES)}${Random.number(1, 1000)}`;
};

const password = () => {
	return Random.string();
};

const login = (): ILogin => {
	return {
		id: Random.uuid(),
		username: username(),
		password: Random.string({ length: 32 }),
		email: Contact.email(),
	};
};

export const Login = {
	username: () => username(),
	passwort: () => password(),
	login: () => login(),
};
