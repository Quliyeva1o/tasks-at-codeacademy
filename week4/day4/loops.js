// Task 1:
// Öz adınızı ekranda 5 dəfə çap edən proqram yazın.

// name="rena";
// for(i=0; i<5 ;i++){
//     console.log(name);
// }


// Task 2:
// Ədədləri 20dən geriyə yazdırın.

// for(i=20; i>0 ;i--){
// console.log(i)
// }

// Task 3:
// ["Bakı","Gəncə","Sumqayıt"]
// arrayin elementlərini consolda göstərin.(hem for,hem for of istifadə edin)

// city = ["Bakı", "Gəncə", "Sumqayıt"]
// for (let i = 0; i< city.length; i++) {
//     console.log(city[i])
// }
// for (const i of city) {
//     console.log(i)
// }


// Task 4:
// ["Bakı","Gəncə","Sumqayıt"]
// arrayin elementlərinin indeksini consolda göstərin.(hem for,hem for in istifadə edin)

// city=["Bakı","Gəncə","Sumqayıt"]
// for (let i = 0; i < city.length; i++) {
//     console.log(i) 
// }
// for (const i in city) {
//   console.log(i)
// }



// Task 5:
// [1,4,5,6,7,8,34,56,98]
// arrayin elementlərinin cəmini tapın.
// let array=[1,4,5,6,7,8,34,56,98]
// let sum=0
// for(i=0; i<array.length;i++){
//     sum+=array[i]

// }  
// console.log(sum)




// Task 6:
// 1-dən 50-yə qədər ədədləri consolda yazdırın.

// for ( i = 1; i <= 50; i++) {
//     console.log(i) 
// }


// Task 7:
// 1-dən 50-yə qədər ədədlər 3-3 artıraraq yazdırı.

// for(i=1;i<=50;i+=3){
//     console.log(i)
// }

// Task 8:
// 1-dən 50-yə qədər cüt ədədləri yazdırın.

// for (i=1;i<50;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// Task 9
// 1-dən 50-yə qədər 8-ə bölünən ədədləri yazdırın.

// for(i=1; i<=50;i++){
//     if(i%8==0){
//         console.log(i)
//     }
// }


// Task 10:
// 1dən 100ə qədər rəqəmlərin cəmini tapan proqram yazın.
// sum = 0
// for (i = 1; i <= 100; i++) {
//     sum = sum + i

// } console.log(sum)

// Task 11:
// Daxil edilən ədədin faktorialını tapan proqram yazın.
// a=Number(prompt("ededi daxil edin"))
// hasil=1
// for(i=1;i<=a;i++){
//     hasil=hasil*i

// }
// window.alert(hasil)

// Task 12:
// 1-100 arasında rəqəmlərdən 3-ə bölünənlər üçün konsola Fizz, 5-ə bölünənlər üçün Buzz, hər ikisinə bölünənlər üçünsə FizzBuzz yazdırın.
// for(i=1;i<=100;i++){
//     if(i%3==0 & i%5==0){
//         console.log("fizzbuzz")}
//     else if(i%5==0){
//         console.log("buzz")
//     }
//     else if(i%3==0){
//         console.log("fizz")
//     }
// }


// Task 13:
// 3 rəqəmli Armstronq nömrələrini tapan JavaScript proqramı yazın.
// Qeyd: Üçrəqəmli Armstronq ədədi rəqəmlərinin kublarının cəmi həmin ədədin özünə bərabər olan tam ədəddir. Məsələn, 3**3 + 7**3 + 1**3 = 371, buna görə də 371 Armstronq nömrəsidir.

// let a=prompt("ededi daxil edin")
// if(a.length==3){
// for(i=0;i<a.length;i++){
//   if(a[0]**3+a[1]**3+a[2]**3==a){
//     window.alert(`${a} armstronq ededdiz`)
//     break;
//   }
//   else{
//     window.alert(`${a} deyil`)
//   }
// }}
// else{
//     window.alert("3reqemli eded daxil edin")
// }

// Task 14:
// Ədəddəki cüt və tək yerdə olan rəqəmləri ayrılıqda cəmləyirik. Bu cəmlərin hasilini tapın. Məsələn, 1243 ədədində tək yerdə duran 1 və 4ün cəmi və cüt yerdə duran 2 və 3ün cəmini tapıb bu cəmlərin hasilini ekrana yazdırın.

// let a = "56378"
// let sumcut = 0
// let sumtek = 0
// for (i = 0; i < a.length; i++) {
//     if (i % 2 == 0) {
//         sumcut +=Number(a[i])  
//     }
//     else{
//         sumtek += Number(a[i]) 
//     }
// }
// console.log(sumcut * sumtek)



// Task 15:
// Bir array daxilindəki ədədlərin hasili əgər cüt ədəddirsə, həmin ədədlərin cəmini consolda göstərin. Yox əgər təkdirsə, consolda sıfır göstərin.

// a = [1, 2, 5, 7]
// hasil = 1
// for (i = 0; i < a.length; i++) {
//     hasil*=a[i]
//     }
//     if (hasil%2==0) {
//         console.log("cut")

//     }
//     else {
//         console.log(0)

//     }


// Task 16:
// Bir arraydə bütün ədədlər cütdürsə consoleda true, təkdirsə false yazın.

// a = [2, 4, 6, 8]
// let counter=0
// for (i = 0; i < a.length; i++) {

//     if(a[i] % 2 == 0){
//         counter++
//     }

// }
//    if (counter==a.length){
//     console.log(true)
//    }
//    else{
//     console.log(false)
//    }



// Task 17:
// Daxil edilən arraydə ədədlərin ədədi ortasını tapın. Tam ədədə yuvarlaqlaşdırın.
// a=[2,4,7,1]
// sum=0
//  for (i = 0; i < a.length; i++) {
//    sum+=a[i]
//  }
// orta=sum/a.length
// console.log(parseInt(orta))

// Task 18:
// İki dəyişən təyin edin. Biri hər hansı söz, digəri isə hərf olsun. Həmin hərf o sözün içində varsa consoleda true, yoxdursa false yazılsın
// a = "rena"
// b = "n"
// counter = 0
// for (i = 0; i < a.length; i++) {
//     if (a[i] == b) {

//         counter++
//     }

// }
// if(counter>0){
//     console.log(true)
// }
// else{
//     console.log(false)
// }


// Task: 19
// İki dəyişən təyin edin. Biri hər hansı söz, digəri isə hərf olsun. Həmin hərfin o sözün içində neçə dəfə olduğunu consoleda yazdırın.
// a = "renna"
// b = "n"
// counter = 0
// for (i = 0; i < a.length; i++) {
//     if (a[i] == b) {

//         counter++
//     }

// }
// if(counter>0){
//     console.log(counter)
// }
// else{
//     console.log(false)
// }


// Task: 20
// Bir dəyişən təyin edin.Bu dəyişən sizin sözünüz olacaq. O sözün içində neçə sait olduğunu consoleda yazdırın.
// a = "rennia"
// b = ["a", "ı", "o", "u", "e", "ə", "i", "ö", "ü"]
// counter = 0
// for (i = 0; i < a.length; i++) {
//     for (j = 0; j < b.length; j++){
//     if (a[i] == b[j]) {
//       counter++
//     }}

// }
// if(counter>0){
//     console.log(counter)
// }
// else{
//     console.log(false)
// }
