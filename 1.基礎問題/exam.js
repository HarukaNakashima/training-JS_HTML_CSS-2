
/************************************************************

Q1：2つの配列を結合する関数を作成しましょう。

************************************************************/

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

function concatArray(arr1, arr2) {
    // ここに処理を記述
    const result = arr1.concat(arr2);
    return result;
};

test('Q1', concatArray(arr1, arr2), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
test('Q1', concatArray(arr2, arr1), [6, 7, 8, 9, 10, 1, 2, 3, 4, 5]);
test('Q1', concatArray(arr1, ['a', 'b', 'c']), [1, 2, 3, 4, 5, 'a', 'b', 'c']);





/************************************************************

Q2：引数にオブジェクトが入っている配列を1つ取り、
redとwhiteだけの個数をまとめたオブジェクトを返す関数colorTypeを作りましょう。

************************************************************/

// ここにコードを書きましょう

const type = [
    { color: "white" },
    { color: "white" },
    { color: "red" },
    { color: "white" },
    { color: "green" },
    { color: "red" },
];

const resultObj = {
    white: 3,
    red: 2
}

test('Q2', colorType(type), resultObj);


const type2 = [
    { color: "white" },
    { color: "pink" },
    { color: "white" },
];

const resultObj2 = {
    white: 2,
    red: 0
}

test('Q2', colorType(type2), resultObj2);

function colorType (arrOfObj) {
    let n1 = 0;
    let n2 = 0;
    const whiteCount = ()=> n1++;
    const redCount = ()=> n2++;
    const result = {
        white: whiteCount(),
        red: redCount()
    };

    arrOfObj.map(elem => {
        if (elem.color === "white") {
            // console.log("whiteCount() : ",whiteCount());
            result.white = whiteCount();
        } else if (elem.color === "red") {
            // console.log("redCount(): ",redCount());
            result.red = redCount();
        }
    })
    return result;
    };







/************************************************************

Q3：2つのオブジェクトを結合する関数を作成しましょう

************************************************************/

const obj1 = { "tanaka": 17, "yamada": 21, "takahashi": 25 };
const obj2 = { "saitou": 38, "shimoda": 25 };

function mergeElem(obj1, obj2) {
    // ここに処理を記述
    Object.assign(obj1,obj2);
    return obj1;
};

test('Q3', mergeElem(obj1, obj2), { "tanaka": 17, "yamada": 21, "takahashi": 25, "saitou": 38, "shimoda": 25 });
test('Q3', mergeElem({"name": "yamada"}, {"age": 16}), {"name": "yamada", "age": 16});








/************************************************************

Q4：
あなたはフルーツの管理人です！

ここでは下記のオブジェクト fruitBasket を使っていきます。

 price : 各フルーツの1つの値段

 color : 各フルーツにどんな種類があるかを色で表しています

 stock : 各フルーツの種類（色）ごとに在庫がいくつあるかを表しています

引数にフルーツの名前を取り、その stock を返してくれる関数 getStock を作りましょう。

もし情報にないフルーツが引数に入ってきた場合は "今はありません" と返してください。

また、そのフルーツの stock の中に1つでも 0 が含まれていた場合、 "今はストックが十分ではありません" と返してください。

************************************************************/

const fruitBasket = {
    apple: {
        price: 120,
        color: ["red", "green"],
        stock: {
            red: 10,
            green: 5
        }
    },
    grape: {
        price: 1000,
        color: ["purple", "green"],
        stock: {
            purple: 3,
            green: 0
        }
    },
    banana: {
        price: 100,
        color: ["yellow"],
        stock: {
            yellow: 50
        }
    }
};

function getStock(fruits) {
    //  ここに処理を記述
    // まず、引数に入ってきたフルーツが何なのか判別する => apple,grape,banana以外は、return"今はありません"
    // apple,grape,bananaのいずれかだった場合は、fruits.stockを見にいく　=> ストックの数を表示
    // ストックに０が含まれない場合、return fruits.stock
    // 上記以外の場合、return "今はストックが十分ではありません"

    if(fruits === "apple"){
       const appleStock = fruitBasket.apple.stock;
       // console.log("appleStock : ", appleStock);
       if (appleStock.red === 0 || appleStock.green === 0) {
           return "今はストックが十分ではありません"
       } else {
           return fruitBasket.apple.stock;
       }
    } else if (fruits === "grape") {
               const grapeStock = fruitBasket.grape.stock;
               // console.log("grapeStock : ", grapeStock);
               if (grapeStock.red === 0 || grapeStock.green === 0) {
                   return "今はストックが十分ではありません"
               } else {
                   return fruitBasket.grape.stock;
               }
    } else if (fruits === "banana") {
               const bananaStock = fruitBasket.banana.stock;
               // console.log("bananaStock : ", bananaStock);
               if (bananaStock.red === 0 || bananaStock.green === 0) {
                   return "今はストックが十分ではありません"
               } else {
                   return fruitBasket.banana.stock;
               }
    } else  {
        return "今はありません";
    }
};

// ここ以下は変更を加えないでください
fruitBasket.grape.stock.green = 0;
test('Q4', getStock("apple"), { red: 10, green: 5 });
test('Q4', getStock("orange"), "今はありません");
test('Q4', getStock("grape"), "今はストックが十分ではありません");

fruitBasket.grape.stock.green = 2;
test('Q4', getStock("grape"), { purple: 3, green: 2 });





/************************************************************



/* Q5：あなたはアイドルグループのマネージャーを任されました！

オブジェクト の中に、メンバーカラーを key としたオブジェクトがあります。
その中はメンバーの名前と年齢がまとまっています。

このオブジェクトの中から25歳以上のメンバーの名前とメンバーカラーが知りたいです。

下記のテストコードを見て、テストをパスするように over25 という関数を作成しましょう。

************************************************************/

// ここにコードを書きましょう
function over25 (obj) {
    const arrOfColor = [];
    const arrOfName = [];
    const result = [
        {color: arrOfColor},
        {name: arrOfName}
    ];
    const newArr = Object.entries(obj);
    // console.log("newArr : ",newArr);
    const filterArr = newArr.filter(elem => elem[1].age >= 25) 
    // console.log("filterArr : ", filterArr);
    for (let i = 0; i < filterArr.length; i++) {
         arrOfColor.push(filterArr[i][0]);
        //  console.log("arrOfColor : ",arrOfColor);
         arrOfName.push(filterArr[i][1].name)
        //  console.log("arrOfName : ",arrOfName);    
    }
    return result;
};

const member = {
    orange: {
        name: "Arisa",
        age: 20,
    },
    blue: {
        name: "Marina",
        age: 25,
    },
    purple: {
        name: "Moe",
        age: 26,
    },
};

const expect = [
    { color: ["blue", "purple"] },
    { name: ["Marina", "Moe"] }
];

const member2 = {
	red: {
		name: "Riko",
		age: 25,
	},
	yellow: {
		name: "Miyu",
		age: 22,
	},
	purple: {
		name: "Airi",
		age: 18,
	},
};

const expect2 = [
	{color: ["red"]},
	{name: ["Riko"]}
];

test('Q5', over25(member), expect);
test('Q5', over25(member2), expect2);





/************************************************************

Q6：任意の個数の数値型の引数をとり、その数の合計を数値型で返す関数getSumを定義しましょう。 

************************************************************/

// ここにコードを書きましょう
function getSum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
         total += arg;
    }
    return total;
};

test('Q6', getSum(1), 1);
test('Q6', getSum(1, 3), 4);
test('Q6', getSum(1, 3, 5, 7, 9, 11), 36);
test('Q6', getSum(9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20), 174);