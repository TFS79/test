
// var fullName = 'Le Van Nguyen';
// var age = 21;
// alert(fullName);
// alert(age);

// console.log(fullName)
// setTimeout(function () {
//     alert(' Thong bao toi anh Nguyen')
// }, 2000)
// var a = 1;
// var b = 2;
// b *= 5;
// var c = a * b;

// console.log(c);
// var number1 = 7;
// var number2 = 9;
// var output = number2--;
// == ===
// console.log('output:   ', output);
// if (a != b) {
//     console.log(' Chuan nhe ban!');
// } else {
//     console.log(' Sai roi ban ei!');
// }
// var isSuccces = a > b;

// var myFunction = function () {
//     alert('Nguyenle');
// }

// var myObject = {
//     name: 'NguyenLe',
//     age: 21,
//     adress: 'Vinh city',
//     myFunction: function () {

//     }
// };

// var Array = [
//     'Hehe',
//     'lala'
// ]


// function writeLog() {
//     console.log(arguments)
// };
// writeLog('hehe', 'lll', 'haha')



// dem do dai chuoi

//var myString = '   Nguyen le pro   ';
// console.log(myString.length);

// tim ki tu trong chuoi
// console.log(myString.indexOf('e', 6))

// cat ki tu trong chuoi
// console.log(myString.slice(5))

//thay the ki tu trong chuoi
// console.log(myString.replace(/e/g, 'E'))
// console.log(myString.replace('e', 'E'))

// Viet hoa tat ca ki tu
//console.log(myString.toUpperCase())

// viet thuong tat ca
//console.log(myString.toLocaleLowerCase())

//loai bo khoang trang thua 2 ben
//console.log(myString.trim());

// cat theo array
// var languages = 'hehe, haha, hihi'
// console.log(languages.split(', '))

// lay ki tu trong chuoi\
// const myString2 = 'Nguyen le';
// console.log(myString2[7]);

// Làm tròn số thập phân
// var PI = 3.132242;
// console.log(PI.toFixed(3));



//Tao mang

// var languages = [
//     '1111111',
//     '22222',
//     '333333',
//     '44444'
// ];
// console.log(typeof languages)

// kiem tra co phai la Array
// console.log(Array.isArray(languages))

// Dem phan tu cua mang
// console.log(languages.length)

//chuyen array thanh chuoi string
// console.log(languages.join(', '));

//xoa phan tu cuoi mang va tra ve phan tu dax xoa
// console.log(languages.pop());


//xoa phan tu dau mang va tra ve phan tu da xoa
// console.log(languages.shift());


//Them phan tu vao dau mang
// console.log(languages.unshift('Nguyen'))


//Them phan tu vao cuoi mang
// console.log(languages.push('Nguyenle'));


//Xoa mot vi tri bat ki trong mang
//languages.splice(2, );

//them 1 vi tri bat ki trong mang
//languages.splice(2, 0, ' 232323'); // co the xoa thu tu khac dc khi thay so 0
//console.log(languages);

// Hop nhat Array
// var languages2 = [
//     '77777',
//     '99999'
// ];
// console.log(languages.concat(languages2));

//cat du lieu cua mang
//console.log(languages.slice(2, 4)); // dau tru de lay duoi len

//Object
// var myInfo = {
//     name: 'Nguyen le',
//     age: 21,
//     address: 'Nghe An, VN'
// };
// //myInfo['my - email'] = 'Nguyenle@gmail.com'; // them value
// myInfo.email = 'Nguyenle@gmail.com'; 
// console.log(myInfo.name); // lay value ra ngoai


//Object contructor
// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;



// }

// var author = new User('Nguyen', 'Le', 'avatar');
// var user = new User('Na', 'Le', 'avatar');

// author.title = 'he he he';
// user.comment = 'kk kkk kkk';

// console.log(author);
// console.log(user);


// doi tuong date
// var date = new Date();

// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();


// console.log(`${day}/${month}/${year}`);


//random
// var random = Math.floor(Math.random() * 4);
// var bonus = [
//     '10 coin',
//     '20 coin',
//     '30 coin',
//     '40 coin',
// ];
// console.log(bonus[random]);


// random theo %
// var random = Math.floor(Math.random() * 100);
// if (random < 5) {
//     console.log('ngon roi');
// }

// lay gia trij lon be nhat
//console.log(Math.max(-100, 1, 9, 10, -10)); // or Min = max


// cau lenh re nhanh - if else
//su dung khi gia tri ch cu the, so sanh tinh dung sai

// var date = 5;
// if (date === 2) {
//     console.log('Hom nay la thu 2');
// } else if (date === 3) {
//     console.log('Hom nay la thu 3');
// } else if (date === 4) {
//     console.log('Hom nay la thu 4');
// } else {
//     console.log('khong chinh xac');
// };

// su dung khi cho gia tri cu the nen dung khi >3 case
// var date = 2;
// switch (date) {
//     case 1:
//         console.log('Hom nay la chu nhat');
//         break;
//     case 2:
//         console.log('Hom nay la thu 2');
//         break;
//         default:
//             console.log('khong co';)
// };


// Toan tu 3 ngôi
// var course = {
//     name: 'Javascript',
//     coin: 15
// };

// // if (course.coin > 0) {
// //     console.log(`${course.coin} Coins`);
// // } else {
// //     console.log('Mien phi');
// // };

// // cach viet toan tu 3 ngoi, su dung vs cac toan tu don gian
// var result = course.coin > 0 ? `${course.coin} Coins` : 'Mien phi';
// console.log(result);




// Vong lap  for
// for (var i = 1; i <= 1000; i++) {
//     console.log(i);
// }

// tao danh sach so ngau nhien
// function getRandNumbers(min, max, length) {
//     var array = []

//     for (var i = 0; i < length; i++) {
//         var randomNum = Math.random() * (max - min) + min
//         array.push(randomNum)
//     }
//     return array
// };


// For loop
// var myArray = [
//     'java',
//     'haha',
//     'kakaka',
//     'lallaaa'
// ];
// var arraylength = myArray.length;
// for (var i = 0; i < arraylength; i++) {
//     console.log(myArray[i]);
// };

// var languages = [
//     'haha',
//     'kakaka',
//     'lalal'
// ];
// for (var key in languages) {
//     console.log(languages[key]); // in ra cac cau
// };

// var languages = 'Nguyenle'
// for (var key in languages) {
//     console.log(languages[key]); //in ra tung ky tu
// };


//for of 
// var languages = 'Nguyenle'
// for (var value of languages) {
//     console.log(value)
// };

// var myInfo = {
//     name: 'Nguyenle',
//     age: 21
// };

// for (var value of Object.keys(myInfo)) {
//     console.log(value);
//     console.log(myInfo[value]); // lay value ben trong 
// }



//Vong lap while
// var i = 0;
// while (i < 1000) {
//     i++;

//     console.log(i);
// }


// // lay gia tri trong mang
// var myArray = [
//     'haha',
//     'heheh',
//     'hahah'
// ];
// var i = 0;
// while (i < myArray.length) {
//     console.log(myArray[i]);
//     i++;
// };


//break & cobntinue in loop
// for (var i = 0; i < 10; i++) {
//     console.log(i);
//     if (i >= 5) {
//         break;
//     }
// };

// for (var i = 0; i < 10; i++) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i); // in ra so chan 
// };


//net loop. vong lap long nhau
// var myArray = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];
// for (var i = 0; i < myArray.length; i++) {
//     for (var j = 0; j < myArray[i].length; j++)
//         console.log(myArray[i][j]);
// }


// for (var i = 100; i >= 0; i -= 5) {
//     console.log(i)
// }

// for (var i = 0; i <= 100; i += 5) {
//     console.log(i)
// }


// De quy


// Tinh giai thua cua 6
// 6*5*4*3*2*1 =
// function giaiThua(number) {
//     var output = 1;
//     for (var i = number; i > 0; i--) {
//         output = output * i;
//     }
//     return output;
// }
// console.log(giaiThua(6));


// De quy
// function giaiThua(number) {
//     if (number > 0) {
//         return number * giaiThua(number - 1);
//     }
//     return 1;
// }
// console.log(giaiThua(6));


// var courses = [
//     {
//         id: 1,
//         name: 'java',
//         coin: 100
//     },
//     {
//         id: 2,
//         name: 'html, css',
//         coin: 200
//     },
//     {
//         id: 3,
//         name: 'ruby',
//         coin: 130
//     },
//     {
//         id: 4,
//         name: 'reactjs',
//         coin: 400
//     },
// ];

// var i = 0;
// var totalCoin = courses.reduce(function (total, course) {
//     return total + course.coin;
// }, 20);
// console.log(totalCoin);


//callback
function myFunction(param) {
    if (typeof param === 'function') {
        param('Hoc tap');
    };
};
function myCallback(value) {
    console.log('value: ', value);
};
myFunction(myCallback);