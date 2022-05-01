import { CITY_NAMES } from '../constants/streets';
import { STREET_TYPES } from '../constants/adress';
import { IAdress } from '../types/user';
import { User } from './user';
import { Random } from './random';

const street = () => {
	return `${User.lastname()}-${streetType()}`;
};

const houseNo = () => {
	return Random.number(1, 400);
};

const postCode = () => {
	return Random.string({ length: 6 }).toUpperCase();
};

const city = () => {
	return Random.arrayItem(CITY_NAMES);
};

const streetType = () => {
	return Random.arrayItem(STREET_TYPES);
};

const adress = (): IAdress => {
	return {
		street: street(),
		houseNo: houseNo(),
		postcode: postCode(),
		city: city(),
		state: city(),
	};
};

export const Adress = {
	street: () => street(),
	houseNo: () => houseNo(),
	postcode: () => postCode(),
	city: () => city(),
	streetType: () => streetType(),
	state: () => city(),
	adress: () => adress(),
};
