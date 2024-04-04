// Device class
//     - Brand
//     - Model
//     - Screen size
//     - Battery level
//     - Price(maya dəyəri)
//     - Sale Price(satış qiyməti)(satış qiyməti maya dəyərindən hər zaman daha böyük olmalıdır)
//     - Discount Percentage(endirim faizi)(əgər endirim faizi sıfırdan böyükdürsə salePrice ona əsasən hesablanmalıdır,
//       məsələn 10 faiz endirim faizi varsa və 100 manata satılırsa satış qiyməti 90 manat olaraq dəyişməlidir)
//     - Sale count(məhsulun satış sayı)
//     - CalculateProfit() - bu method isə həmin device - ın satışından əldə edilən gəliri hesablayacaq.Əgər məhsul ziyana satılarsa 
//       o zaman nə qədər ziyan etdiyini göstrəcək.
//      - DisplayBatteryLevel() - bu method isə device - ın hazırdakı battereyasını göstərəcək
//     - DisplayDetails() - bu mehtod isə device haqqında detalları yazacaq(screensize, model, brand,)

class Device {
    constructor(brand, model, screenSize, batery, mprice, sprice, disPercentage, saleCount) {
        this.brand = brand;
        this.model = model;
        this.screenSize = screenSize;
        this.batery = batery;
        this.disPercentage = disPercentage;
        this.saleCount = saleCount;
        let disCount = sprice * disPercentage / 100
        if (sprice - disCount > mprice) {
            this.mprice = mprice;
            this.sprice = sprice;
        }
        else {
            console.log(`${this.brand}'s sales price is low`)
        }
    }

    CalculateProfit() {
        let disCount = this.sprice * this.disPercentage / 100

        if (this.sprice - disCount > this.mprice) {
            return this.sprice - this.mprice - disCount
        }

        else {
            let a = "zerer"
            return a
        }
    }

    DisplayBatteryLevel() {
        return `batarey level is ${this.batery}`;
    }
    DisplayDetails() {
        return `screen size:${this.screenSize} \nmodel:${this.model} \nbrand:${this.brand}`;
    }
}




//      Bir Phone class-ı yaradırsınız.Device class-ından miras alır və əlavə olaraq, isSmart deyeri var (true false deyerleri olur)
//      Bir Laptop class-ı yaradırsınız.Device class-ından miras alır və əlavə olaraq, isRGBkeyboard deyeri var (true / false)
// --------------------------------
//     Phone və Laptop class-larından istifadə edib bir neçə product yaradın və products array - inə yığın.Və global - da aşağıdakı
//     function-ları yazın.
//     1. FilterbyPrice - parametr olaraq array və price deyerleri qebul edir.Gonderilmish array - də price - ı göndərilmiş price - dan yuxarı olan 
//     productların name - lərini qaytarın.
//     2. FilterbyName - parametr olaraq bir array və name deyerleri qebul edir və gonderilen name - e esasen hemin name - de olan
//     product - ların sayını qaytarır. (Məsələn products array - i və "Iphone" gonderilerse name - i Iphone olanlarin sayini qaytarmalidir)
//     3. GetTotalProfit - parametr olaraq bir array qebul edir ve hemin array - deki product - larin umumi profitini(gelirini) qaytarir.

class Phone extends Device {
    constructor(brand, model, screenSize, batery, mprice, sprice, disPercentage, saleCount, isSmart) {
        super(brand, model, screenSize, batery, mprice, sprice, disPercentage, saleCount)
        this.isSmart = isSmart
    }
}
const phone1 = new Phone("samsung", "s22 ultra", 10, 100, 2000, 3000, 5, 200, true);
const phone2 = new Phone("apple", "Iphone 13", 12, 99, 4000, 6000, 3, 900);
const phone3 = new Phone("xiaomi", "redmi note 10", 15, 80, 2000, 3000, 5, 300, true);
const phone4 = new Phone("samsung", "galaxy", 23, 50, 500, 600, 10, 20, true);
const phone5 = new Phone("apple", "iphone 15pro max", 23, 50, 500, 600, 10, 20, true);

class Laptop extends Device {
    constructor(brand, model, screenSize, batery, mprice, sprice, disPercentage, saleCount, isRGBkeyboard) {
        super(brand, model, screenSize, batery, mprice, sprice, disPercentage, saleCount)
        this.isRGBkeyboard = isRGBkeyboard
    }
}

const laptop1 = new Laptop("Acer", "Aspire", 20, 98, 2000, 3000, 2, 50, false);
const laptop2 = new Laptop("Lenovo", "dgf", 27, 100, 1500, 2000, 5, 50, false);
const laptop3 = new Laptop("Monster", "xdnv", 20, 98, 2000, 2500, 6, 50, false);
// console.log(phone4.CalculateProfit());

productsArr = [phone1, phone2, phone3, phone4, phone5, laptop1, laptop2, laptop3];


function FilterbyPrice(array, price) {
    return array.filter(array => array.sprice > price)
}

// console.log(FilterbyPrice(productsArr,700));


// 2. FilterbyName - parametr olaraq bir array və name deyerleri qebul edir və gonderilen name - e esasen hemin name - de olan
//     product - ların sayını qaytarır. (Məsələn products array - i və "Iphone" gonderilerse name - i Iphone olanlarin sayini qaytarmalidir)
function FilterbyName(array, name) {
    return array.filter(array => array.model.trim().toLowerCase().includes(name.trim().toLowerCase()))
}
// console.log(FilterbyName(productsArr, "iphone"));

// 3. GetTotalProfit - parametr olaraq bir array qebul edir ve hemin array - deki product - larin umumi profitini(gelirini) qaytarir.
function GetTotalProfit(array) {
   sum = array.reduce((profit, product) => profit + product.sprice, 0)
   return sum
}
console.log(GetTotalProfit(productsArr));
