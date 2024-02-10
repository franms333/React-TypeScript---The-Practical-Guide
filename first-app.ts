// TypeScript Types
let userName: string;
let userAge: number;
let isValid: boolean;

// 12.- Combining types union types
// Son tipos de datos  que pueden ser de varios tipos declarados
let userId: string | number = 'abc1';
userId = 123

// 13.- Object Types
// Los ; pueden usarse para separar atributos de un objeto al declarar sus tipos
let user: {
    name:string;
    age:number;
    isAdmin:boolean;
    id:string|number;
};

user = {
    name: "Frank",
    age: 27,
    isAdmin: true,
    id: 'abc'
}

// 14.- Array Types
// Las <> indican qué tipos contiene el array
// let hobbies: Array<String>;
// Pueden escribirse así, es más común escribir los array así
let hobbies: (string|number)[]

hobbies = ['anime', 'programming', 'videogames'];
hobbies.push(33)

// 15.- Adding types to functions
// Podemos agregar tipos de datos a los parámetros y al tipo de dato de retorno que devuelve una función
// Si una función no retorna nada el tipo de retorno debe ser "void"
function add(a:number, b:number):number {
    return a + b;
}

// Si uno de los parámetros de una función es otra función podemos declarar como su tipo la firma de la función + el tipo de retorno. Ejemplo: calcFn: (a:number, b:number) => number
function calculate(a:number, b:number, calcFn: (a:number, b:number) => number) {
    calcFn(a,b);
}

calculate(3,7, add);

// 17.- Crear tipos de datos
// Podemos definir tipos de datos usando la palabra clave "type" seguido del nombre del tipo de dato que queremos crear y un signo de = al que después se le pasará la estructura del tipo de dato
type AddFn = (a:number, b:number) => number

// De esta manera usamos el nuevo tipo de dato para evitar que el parámetro de nuestra función sea tan largo
function calculate2(a:number, b:number, calcFn:AddFn) {
    calcFn(a,b);
}

// 18.- Interfaces
// Hay otras formas de crear tipos de datos, un ejemplo son las interfaces
// Son esencialmente para crear objetos o funciones, por eso no usan el signo de = sino el símbolo de {}
interface Credentials {
    password: string;
    email: string;
}

let creds: Credentials;

creds = {
    password: 'abc',
    email: 'test@test.com',
    mode: ''
}

// 19.- types vs interfaces
// Las interfaces pueden ser usadas como contratos que deben usar las clases. Por ejemplo: Si implementamos la interfaz que creamos "Credentials" debemos usar si o si las variables declaradas dentro de lo contrario tendremos error
class AuthCredentials implements Credentials {
    password: string;
    email: string;
    mode: string;

    username: string;
}

// Las interfaces suelen ser usadas en su mayoría solo en el caso donde se usan clases

// Otra virtud que tienen las interfaces por encima de los tipos es que pueden ser redefinidas en cualquier momento sin que de error. Ejemplo: ↓ en el caso de abajo se agregó un nuevo atributo a la interfaz de Credentials
interface Credentials {
    mode: string;
}

// 20.- Merging types
type Admin = {
    permissions: string[];
}

type AppUser = {
    username: string;
}

// Al usar el símbolo de & podemos unir dos tipos creados por nosotros
type AppAdmin = Admin & AppUser;

let admin: AppAdmin;
admin = {
    permissions: ['admin'],
    username: 'test'
}

// Podemos hacer lo mismo con las interfaces
interface Admin2 {
    permissions: string[]
}

interface AppUser2 {
    username: string;
}

// En el caso de las interfaces lo que hacemos es que en lugar de usar el símbolo &, lo que hacemos es usar la palabra clave "extends" seguido de todas las interfaces que queremos unir
interface AppAdmin2 extends Admin2, AppUser2 {}

let admin2: AppAdmin2;

admin2 = {
    permissions: ['login'],
    username: 'test2'
}

// 21.- Literal Types
// Consisten en tipos que solo aceptan ciertos datos como valor, va más allá del tipo de dato que son sino que validan incluso el contenido
let role: 'admin' | 'user' | 'editor' // 'admin', 'user', 'editor'

role = 'admin';
role = 'user';
role = "editor";

// 22.- Adding type guards
type Role = 'admin' | 'user' | 'editor';

function performAction(action: string | number, role: Role) {
    // De esta manera agregamos guards para verificar que el dato que viene en el type personalizado viene correcto
    if(role === 'admin' && typeof action === 'string'){
        // do something
    }
}

// 23.- Important: You can NOT check if a value meets the definition of a custom type (type alias) or interface type. These are TypeScript-specific features for which no JavaScript equivalent exists. Therefore, since those if checks need to run at runtime, you can't write any code that would be able to check for those types at runtime.

// For example, the below code won't work because the User type does not exist once the code is compiled to JavaScript:
type User = {
  name: string;
  age: number;
};
 
type Admin3 = {
  name: string;
  age: number;
  permissions: string[];
};
 
// ↓↓↓↓↓ This code returns error ↓↓↓↓↓
// function login2(u: User3 | Admin3) {
//   if (typeof u === User3) {
//     // do something
//   }
// }


// But you could check for the existence of the permissions property since only the Admin object will have one:

function login(u: User | Admin3) {
  if ('permissions' in u) {
    // do something
  }
}
// That code would work at runtime.

// Generic Types
// "Array" es un generic type, basicamente generic types son tipos que trabajan en conjunto con otro tipo
let roles2: Array<Role>;
roles2 = ['admin'];

// Podemos crear nuestros propios generic types
// Para crearlo solo tenemos que usar el símbolo <> al lado del nombre de nuestro tipo y en medio de esos símbolos colocar el nombre del generic type que queremos crear, normalmente se usa la letra T solamente para simbolizar "Type"
type DataStorage<T> = {
    storage: T[];
    add: (data: T) => void;
}

// Ahora podemos usar nuestro recién creado generic type como iniciador de otras variables
const textStorage: DataStorage<string> = {
    storage: [],
    add(data) {
        this.storage.push(data)
    }
}

const userStorage: DataStorage<User> = {
    storage: [],
    add(user) {
        this.storage.push(user)
    }
}

// Otra alternativa para crear generic types es creando una función. Ejemplo:
function merge<T, U>(a:T, b:U) {
    return {
        ...a,
        ...b
    }
}

const user2 = merge(
    {name:'Frank'},
    {age:27}
)

user2.name;