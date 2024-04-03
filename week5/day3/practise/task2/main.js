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

class Device {
    constructor(brand, model, screenSize, batery, mprice, sprice, disPercentage, saleCount) {
        this.brand = brand;
        this.model = model;
        this.screenSize = screenSize;
        this.batery = batery;
        this.mprice = mprice;
        this.sprice = sprice;
        this.disPercentage = disPercentage;
        this.saleCount = saleCount;
    } 
    
    CalculateProfit() {
        if (this.sprice >= this.mprice) {
         
            return this.sprice - this.mprice
        }

        else { 
           let a ="zerer"
           return a
        }
    }


}


const device1 = new Device("samsung", "s22 ultra", 10, 100, 4000, 3000, 5, 200);
const device2 = new Device("apple", "Iphone 13", 12, 99, 5000, 6000, 3, 900);

console.log(device1.CalculateProfit())
const deviceArray = [device1, device2];


