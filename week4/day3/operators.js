// Task 1:
// Daxil edilən yaşa görə istifadəçinin pensiya yaşına çatıb-çatmadığını tapan proqram yazın.
// Ədəd müsbət və 125-dən balaca olmalıdır.

// Task 2:

// Daxil edilən 3 rəqəmə əsasən üçbucağın tərəfinə görə hansı növü olduğunu müəyyənləşdirən proqram yazın.Hər üç rəqəm müsbət olmalıdır.

// Task 3:

// Daxil edilən rəqəmin cüt yoxsa tək olmasını tapın.Ədəd müsbət olmadır.

// Task 4:

// Daxil edilən 1-12 arasındakı müsbət rəqəmlərdən hər hansı birinə uyğun olan ayın adını yazan proqram yazın. Məsələn 2 daxil edilsən Fevral yazılmalıdır.(switch ilə yazılmalıdır.) 1-dən kiçik və 12-dən böyük rəqəm daxil edildikdən consolda  "Zəhmət olmasa sadəcı 1-12 aralığında ədəd daxil edin" yazılsın.


// Task 5:

// Daxil edilən müsbət ədədin 3 və 5 ədədinə eyni anda bölünüb-bölünmədiyini tapan proqram yazın.


// Task 6:

// Daxil edilən müsbət ədədin 2-yə tam bölünüb-bölünmədiyini tapan proqram yazın. Əgər tam bölünürsə, consolda bölündü yazılsın,tam bölünmürsə qalıq hesablanıb yazılsın.

// Task 7:

// Daxil edilən 2 ədədin hasilinin müsbət yoxsa mənfi ədəd olmasını göstərən funksiya yazın.


// Task 8:

// Daxil edilən müsbət ədədin 1-100 arasında olub-olmadığını tapan proqram yazın.

// Task 9:

// Daxil edilən 3 müsbət ədədin ən böyüyünü tapan proqram yazın.

// Task 10:

// Tələbənin daxil etdiyi bala görə A B C D E F qiymətlərindən hansını aldığını müəyyənləşdirrən proqram yazın. 90 və yuxarı üçün "A", 80-89 üçün "B", 70-79 üçün "C", 60-69 üçün "D", 59 və daha aşağı qiymətlər üçün "F". Daxil edilən rəqəm müsbət, sıfırdan böyük və 100-dən kiçik olmalıdır.


// Task 11:

// İstifadəçi yaşını daxil edir.Yaş 18-dən azdırsa "Yeniyetmə", 18-64 yaşdadırsa "Yetkin", 65 və daha yuxarıdırsa "Yaşlı" kimi çıxış edən proqram yazın.Ədəd müsbət olmalıdır.


// Task 11:

// Daxil edilən saata uyğun "Sabahınız xeyir", "Günortanız xeyir", "Axşamınız xeyir" yazan proqram yazın. Ədəd müsbət və 0-24 arasında olmalıdır.


// Task 12:

// Daxil edilən x və y ədədlərinin aşağıdakı şərtlərinə görə hesablamasını edən proqram yazın. Bu şərtlərdən başqası daxil edilərsə consolda "Sadəcə tələb olunan şərtləri daxil edin yazılsın."

// Əgər x>0 və y<0 isə 4x+2y+4 ifadəsini hesablayın.
// Əgər x>0 və y=0 isə 2x-y+3 ifadəsini hesablayın.
// Əgər x<0 və y>0 isə 3x+4y+3 ifadəsini hesablayın.




// Task 13:

// İstifadəçidən 3 dəyər alın bunlardan ikisi rəqəm, biri isə riyazi əməl olsun.Riyazi əmələ görə rəqəmlər üzərində əməliyyat aparsın. Riyazi əməllər toplama,çıxma,vurma və bölmə olacaq.Bu dörd əməldən başqası daxil edilərsə console "Zəhmət olmasa düzgün əməl daxil edin yazılsın." Taskı switch-case ilə yazın.


// Task 14:

//  Kişik bir lotoreya oyunu yazın. Bu oyunda komputer bir random rəqəm yaradacaq, istifadəçidən isə promptla bir rəqəm alınacaq. Şərtlər belədir:
// 1. Daxil edilən random ədədlə istifadəçinin daxil etdiyi ədəd üst-üstə düşərsə alertlə " Siz 1000 manat qazandınız yazın".
// 2. Daxil edilən random ədədlə istifadəçinin daxil etdiyi ədədin hər iki mərtəbəsi uyğun gələrsə, amma mərtəbələrin yeri dəyişikdirsə alertlə " Siz 500 manat qazandınız" yazın. Yəni random ədəd 45-dir amma istifadəçi 54 yazıbsa o 500 manat qazanır.
// 3. Daxil edilən random ədədlə istifadəçinin daxil etdiyi ədədin bir mərtəbəsi uyğun gələrsə,alertlə " Siz 100 manat qazandınız" yazın. Yəni random ədəd 32-dir istifadəçi 42 yazıbsa o 100 manat qazanır.
// 4. Bu hallardan heç biri deyilsə, alertlə "Bir daha sınayın" yazın.


function task1() {
    var age = prompt("yasinizi daxil edin");
    if (age < 125) {
        if (age > 60) {
            alert("pensiya alirsiniz")
        }
        else {
            alert("yasiniz catmir")
        }
    }
    else {
        alert("125den kicik deyer daxil edin")
    }
}
// task1()

// task2
function task2() {
    var a = Number(prompt("a"))
    var b = Number(prompt("b"))
    var c = Number(prompt("c"))
    if (a == b && b == c) {
        alert("beraberterefli")
    }
    else if (a == b || a == c || b == c) {
        alert("beraberyanli")
    }
    else (alert("muxtelifterefli"))
}
// task2()

// task3\
function task3() {
    var eded = Number(prompt("eded"))
    if (eded > 0) {
        if (eded % 2 == 0) {
            alert('eded cutdur')
        }
        else {
            alert("eded tekdir")
        }
    }
    else {
        alert("musbet eded daxil edin")
    }
}
// task3()

// task4
function task4() {
    var reqem = Number(prompt("1ve 12 arasinda reqem daxil edin"))
    if (1 <= reqem && reqem <= 12) {
        switch (reqem) {
            case 1:
                alert("yanvar")
                break;
            case 2:
                alert("fevral")
                break;
            case 3:
                alert("mart")
                break;
            case 4:
                alert("aprel")
                break;
            case 5:
                alert("may")
                break;
            case 6:
                alert("iyun")
                break;
            case 7:
                alert("iyul")
                break;
            case 8:
                alert("avqust")
                break;
            case 9:
                alert("sentyabr")
                break;
            case 10:
                alert("oktyabr")
                break;
            case 11:
                alert("noyabr")
                break;
            case 12:
                alert("dekabr")
                break;

            default: alert("1 ve 12 arasinda bir deyer daxil edin")


        }
    }
    else {
        alert("1 ve 12 arasinda bir deyer daxil edin")
    }
}
// task4()

// task5
function task5() {
    var eded = prompt("ededi daxil edin")
    if (eded % 3 == 0 && eded % 5 == 0){
        alert("eded hem 3e hem 5 e qaliqsiz bolunur")
    }
    else(
        alert("bolunmur")
    )
}
// task5()

// task6
function task6() {
    var eded = Number(prompt("musbet ededi daxil edin"))
    var qaliq=eded%2
    if(eded>0){
    if (qaliq == 0 ){
        alert("eded 2ye tam bolunur")
    }
    else(
      
        alert(`bolunmur qaliq ${qaliq}`)
    )}
    else{
        alert("musbet eded daxil edin")
    }
}
// task6()

//task7
function task7(){
    var a=Number(prompt("a"))
    var b=Number(prompt("b"))
    var hasil= a*b
    if(hasil%2==0){
        alert("musbetdir")
    }
    else(
        alert("menfidir")
    )
}
// task7()

// task8
function task8(){
var a=Number(prompt("a"))
if(a>0)
{
    if(a>1 && a<100){
        alert("a 1 ve 100 araligindadir")
    }
    else{
        alert("deyil")
    }
}
else{
    alert("musbet eded daxil edin")
}

}
// task8()
// task9

function task9(){
    var a= Number (prompt("a"))
    var b= Number (prompt("b"))
    var c= Number (prompt("c"))

    if(a>b && a>c){
        alert("a")
    }
    else if(
        b>a && b>c
    ){
        alert("b")
    }
    else{
        alert("c")
    }
}
// task9()
// task10
