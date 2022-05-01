import { FEMALE_NAMES } from '../constants/female-names';
import { GENDER } from '../constants/gender';
import { LASTNAMES } from '../constants/lastnames';
import { MALE_NAMES } from '../constants/male-names';
import { IGender, ITitle, IUser, IUserListOptions } from '../types/user';
import { Adress } from './adress';
import { Contact } from './contact';
import { Login } from './login';
import { Random } from './random';

const gender = (): IGender => {
	return Random.arrayItem(GENDER);
};

const title = (gender: IGender): ITitle => {
	return gender === 'female' ? 'Mrs.' : 'Mr.';
};

const femaleName = (): string => {
	return Random.arrayItem(FEMALE_NAMES);
};

const maleName = (): string => {
	return Random.arrayItem(MALE_NAMES);
};

const lastname = (): string => {
	return Random.arrayItem(LASTNAMES);
};

const user = (): IUser => {
	const _gender = gender();
	const firstname = _gender === 'female' ? femaleName() : maleName();
	return {
		id: Random.uuid().toString(),
		gender: _gender,
		title: title(_gender),
		firstname: firstname,
		lastname: lastname(),
		birthday: Random.date(),
		adress: Adress.adress(),
		contact: Contact.contact(),
		login: Login.login(),
	};
};

const listOfUsers = (options: IUserListOptions = { length: 10 }): Array<IUser> => {
	const list: Array<IUser> = [];
	for (let i = 0; i < options.length; i++) {
		list.push(User.user());
	}
	return list;
};

export const User = {
	gender: () => gender(),
	title: (gender: IGender) => title(gender),
	femaleName: () => femaleName(),
	maleName: () => maleName(),
	lastname: () => lastname(),
	user: () => user(),
	listOfUsers: (options?: IUserListOptions) => listOfUsers(options),
};
