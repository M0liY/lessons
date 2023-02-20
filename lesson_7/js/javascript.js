// function hello(number) {
//     return number;
// }

// console.log(hello(5));

// let firstPart = "love";
// let userInfo = {
//     name: "Vlad",
//     age: 30,
//     "likes javasctipt": true,
//     [firstPart + " javascript"]: false,
//     address:
//     {
//         city: "Odessa",
//         street: "Zabolotnogo"
//     }
// }
// console.log(userInfo["likes javasctipt"]);
// console.log(userInfo["love javascript"]);

// let key = "name";
// console.log(userInfo[key])

// // Вложенность объекта!
// console.log(userInfo.address.city);
// console.log(userInfo.address.street);

// // Свойство из переменной
// function makeUserInfo(name, age) {
//     return {
//         name: name,
//         age: age,
//     };
// }

// let user = makeUserInfo("Oleg", 23);
// console.log(user.address = "Krimskaya");
// console.log(user.address);

// userInfo.home = 29;
// console.log(userInfo)

let figure = {
    name: "",
    countOfangel: 0,
    figure(name, countOfangel) {
        this.name = name;
        this.countOfangel = countOfangel;
    },
    show: function show() {
        console.log(this.name + " " + this.countOfangel);
    },
}
let triangle = new figure("Tiangle", 3);
triangle.show();
