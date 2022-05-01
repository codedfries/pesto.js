import { Adress } from './services/adress';
import { Contact } from './services/contact';
import { Login } from './services/login';
import { Random } from './services/random';
import { User } from './services/user';

export { Adress };
export { Contact };
export { Login };
export { Random };
export { User };

console.log(User.listOfUsers({ length: 20 }));
