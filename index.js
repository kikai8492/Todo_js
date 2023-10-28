// const myProfile = {
//   name: "kikai",
//   age: 21,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// // 分割代入
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["kikai", 21];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// // 分割代入
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// // デフォルト値

// const sayHello = (name = "ゲスト") => {
//   console.log(`こんにちは！${name}さん！`);
// };

// sayHello();

// スプレッド構文

// 配列の展開
// const arr1 = [1, 2];
// console.log(...arr1);

// const sumFunc = (num1, num2) => {
//   console.log(num1 + num2);
// };

// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1, num2, arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];

// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// // mapやfilterを使った配列の処理
// const nameArr = ["田中", "山田", "鈴木"];

// // const nameArr2 = nameArr.map((name) => {
// //   return name;
// // });

// // console.log(nameArr2);
// nameArr.map((name) => {
//   console.log(name);
// });

// const numArr = [1, 2, 3, 4, 5];
// // const newNUmArr = numArr.filter((num) => {
// //   return num % 2 === 1;
// // });
// // console.log(newNUmArr);
// numArr.filter((a) => {
//   if (a % 2 === 1) {
//     console.log(`${a}は奇数です`);
//   } else {
//     console.log(`${a}は偶数です`);
//   }
// });

//三項演算子
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 >= 100 ? "100を超えています" : "許容範囲内です";
// };

// check = checkSum(50, 40);

// console.log(check);

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1か2はtrueになります");
}

//||は左側がfalseなら右側を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

//&&は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
