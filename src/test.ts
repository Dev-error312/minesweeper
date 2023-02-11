let a: number;
let b: boolean;
let c: string;

interface BasicUser {
    name: string;
    surname: string;
    age: number;
    isAdmin: boolean;
    permissions?: string[];
 }

let user: BasicUser = {
    name: "Suyog",
    surname: "Adhikari",
    age: 20,
    isAdmin: true,
};

interface UserWithPermissions extends BasicUser {
    permissions: string[];
};

const user2: UserWithPermissions = {
    name: "Ivan",
    surname: "Ivanov",
    age: 31,
    isAdmin: false,
    permissions: ['manager', 'operator', 'instructor'],
};

type MathFunc = (a: number, b: number) => number;

const mul: MathFunc = (a, b) => a * b; 

const add: MathFunc = (a, b) => a + b; 