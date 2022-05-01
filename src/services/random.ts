import crypto from 'crypto';
import { IStringOptions } from '../types/utils';

const randomArrayValue = (array: string | any[]) => {
	return array[Math.floor(Math.random() * array.length)];
};

const randomDate = () => {
	return new Date(+new Date() - Math.floor(Math.random() * 10000000000));
};

const randomNumber = (min: number, max: number): number => {
	if (min < 1) {
		throw new Error('Min value has to be greater than 0.');
	}

	const number = Math.floor(Math.random() * (max - min + 1));
	return number === 0 ? 1 : number;
};

const generateRandomString = (options: IStringOptions = { length: 6 }) => {
	const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const NUMBERS = '123456789'.split('');

	const STRING_TYPES: Record<number, Array<string>> = {
		1: ALPHABET,
		2: NUMBERS,
	};

	const string_array = [];

	for (let i = 0; i < options.length; i++) {
		string_array.push(randomArrayValue(STRING_TYPES[randomNumber(1, 3)]));
	}

	return string_array.join('');
};

const generateUuid = () => {
	return crypto.randomUUID();
};

export const Random = {
	arrayItem: (array: Array<any>) => randomArrayValue(array),
	date: () => randomDate(),
	number: (min: number, max: number) => randomNumber(min, max),
	string: (options?: IStringOptions) => generateRandomString(options),
	uuid: () => generateUuid(),
};
