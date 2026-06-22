const secret = Symbol("56678");
const user={
    name:"Alice",
    [secret]:"top-secret token"
}
console.log(user[secret]);
const symbols = Object.getOwnPropertySymbols(user);
console.log(symbols);