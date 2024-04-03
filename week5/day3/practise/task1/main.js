// Product class
//  - id
//  - Name
//  - Price

//  Milk : Product
//  - FatPercent
//  - Madeİn

// Milk class-ından istifadə edib 3 milk yaradın.Milk classı Product classından extend alacaq.Və onları bir array-ə yığın.
// TASK 1.1 : Məhsulların hər birini consoleda göstərin.
// TASK 1.2 : Məhsullardan id-si 1-ə bərabər olan məhsulu qaytaran funksiya yazın.
// TASK 1.3 : FatPercent-in ədədi ortasını çıxarın. Bunu FatAverage adlı funksiya ilə edin. Funksiya həmin arrayi parametr kimi qəbul edəcək, ədədi ortanı qaytaracaq.
// Task 1.4 : yağlılıq faizi 3-dən yuxarı olan milk-ləri arraydə göstərin. Funksiya yazın.
// Task 1.5 : Funksiya yazın array və bir number qəbul etsin. Arraydəki elementlərin price-nı bu number qədər artırsın.
// Task 1.6 : Ümumi price-ı qaytaran funksiya yazın.
// Task 1.7 : Məhsullardan id-si 1-ə bərabər olan məhsulu qaytaran funksiya yazın.
// Task 1.8 : ən baha milkin adını qaytaran funksiya yazın. Arrayi parametr kimi qəbul etsin
// Task 1.9 : ən baha və ən ucuz arasındakı fərqi qaytaran funksiya yazın. Funksiya yazın.
// Task
//   1.10: Məhsullar içərisində Azərbaycan istehsalı olan məhsul varmı?
// Qeyd: Funksiyaları yazarkən, array iteration methodlarından istifadə edin.


class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Milk extends Product {
    constructor(id, name, price, fatPercent, madeIn) {
        super(id, name, price);
        this.fatPercent = fatPercent;
        this.madeIn = madeIn;
    }
}

const milk1 = new Milk(1, "Shokki Mokki", 0.5, 2.5, "USA");
const milk2 = new Milk(2, "Chudo", 1, 3.1, "France");
const milk3 = new Milk(3, "Milka", 1.2, 3.5, "Germany");
const milk4 = new Milk(4, "azersud", 1.1, 3.2, "Azerbaycan");

// TASK 1.1 : Məhsulların hər birini consoleda göstərin.

const milkArray = [milk1, milk2, milk3,milk4];
// milkArray.forEach(milk => {
//     console.log(`ID: ${milk.id}, Name: ${milk.name}, Price: $${milk.price}, Fat Percent: ${milk.fatPercent}%, Made In: ${milk.madeIn}`);
// });


// TASK 1.2 :  Məhsullardan id-si 1-ə bərabər olan məhsulu qaytaran funksiya yazın.
function findproductbyid(product, id) {
    for (i of product) {
        if (i.id = id) {
            return i;
        }
    }
    return null;
}

console.log(findproductbyid(milkArray, 1))






// TASK 1.3 : FatPercent-in ədədi ortasını çıxarın. Bunu FatAverage adlı funksiya ilə edin. Funksiya həmin arrayi parametr kimi qəbul edəcək, ədədi ortanı qaytaracaq.
FatAvarage = function (array) {
    sum = 0
    for (j of array) {
        sum += j.fatPercent

    } return sum / array.length;
}
// console.log(FatAvarage(milkArray))



// Task 1.4 : yağlılıq faizi 3-dən yuxarı olan milk-ləri arraydə göstərin. Funksiya yazın.
findbyavarage = function (array, percent) {
    percentarr = []
    for (i of array) {
        if (i.fatPercent > percent) {
            percentarr.push(i)
        }
    } return percentarr
}
// console.log(findbyavarage(milkArray, 3))


// Task 1.5 : Funksiya yazın array və bir number qəbul etsin. Arraydəki elementlərin price-nı bu number qədər artırsın.
sumprices = function (array, num) {

    newarr = array.filter((i) => i.price += num);
    return newarr

}
// console.log(sumprices(milkArray, 3))



// Task 1.6 : Ümumi price-ı qaytaran funksiya yazın.
function umumiprice(array) {
    const sum = array.reduce((acc, cur) => acc + cur.price, 0);
    return sum;
}

// console.log(umumiprice(milkArray))



// Task 1.8 : ən baha milkin adını qaytaran funksiya yazın. Arrayi parametr kimi qəbul etsin
maxPrice = function (array) {

    let sort = array.sort((a, b) => b.price - a.price);
    return sort[0].name;

}
// console.log(maxPrice(milkArray))


// Task 1.9 : ən baha və ən ucuz arasındakı fərqi qaytaran funksiya yazın. Funksiya yazın.
maxminPrice = function (array) {

    let sort = array.slice().sort((a, b) => b.price - a.price);
    return sort[0].price - sort[array.length-1].price;
}
// console.log(maxminPrice(milkArray))





// 1.10: Məhsullar içərisində Azərbaycan istehsalı olan məhsul varmı?

function madein(array,country) {
    return array.some(milk => milk.madeIn == country);
}

// console.log(madein(milkArray,"Azerbaycan"));
