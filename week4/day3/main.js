// Task 1:
// Daxil edilən saniyə dəyərini özündə saxlayan bir variable yaradın.Bu saniyə dəyərinin necə dəqiqə və saniyəyə bərabər olduğunu tapan proqram yazın.
// Məsələn əgər 150 saniyə yazılıbsa, cavabda 2 dəqiqə 30 saniyə tapılmalıdır.

// Task 2:
// Daxil edilən temperaturun dəyərini özündə saxlayan bir variable yaradın və bu temperaturun necə selsi olduğunu tapan proqram yazın.
// Düstur= 5/9 * (temperatur-32)

// Task 3:
// Tələbənin 5 fənn üzrə balını daxil edib, ortalamasını öyrənə biləcəyi proqram yazın.

// Task 4:

// Daxil edilən doğum ilinə görə yaşı hesablayn proqram yazın.

// Task 5:

// Ədədin faizini tapan proqram yazın.

// Task 6:

// Daxil edilən katetlərə görə düzbucaqlı üçbucağın sahəsini tapan proqram yazın.

// Task 7:

// İstifadəçidən alınan kredit miqdarı,faiz dərəcəsi və kredit müddəti əsasında aylar üzrə nə qədər ödəniş etməli olduğunu tapan proqram yazın.

// Task 8:

// İstifadəçidən ad və soyadını alaraq onu salamlayan mətin yaradın.

// Task 9:

// Kvadratın perimetr və sahəsini hesablayan proqram yazın.

// Task 10:

// Daxil edilən iki ədədin cəminin kubunu və kublarının cəmini tapın.



//task1
// var saniye = prompt("saniye:"); 
// var deq = parseInt(saniye / 60)+ "deqiqe " +(saniye % 60)+"saniye";
// alert(deq)




//task2
// var temp=prompt("temperatur:");
// var c= 5/9 * (temp - 32)
// alert(c)


// task3
// var az = Number(prompt("azerbaycan dili"));
// var ing = Number(prompt("ingilis dili"));
// var riy = Number(prompt("riyaziyyat"));
// var fiz = Number(prompt("fizika"));
// var kim = Number(prompt("kimya"));

// var ort = (az + ing + riy + kim + fiz) / 5;
// alert(ort)



//task4
// var year=Number(prompt("dogum ilinizi daxil edin"));
// var age=2024-year;
// alert(`yasiniz:${age}`)

//task5
// var eded =prompt("ededi daxil edin")
// var faiz =prompt("faizi daxil edin")
// result=eded*faiz/100
// alert(`${eded}nin ${faiz} faizi ${result}a beraberdir`)

// task6

// var katet1=Number(prompt("katet 1in olcusunu daxil edin"))
// var katet2=Number(prompt("katet 2nin olcusunu daxil edin"))
// var sahe=(katet1*katet2) /2
// alert (`sahe:${sahe}`)


//task7
//  var credit = Number(prompt("kredit"))
//  var faiz = Number(prompt("faiz "))
//  var ay = Number(prompt("kredit muddeti (ay) "))
// var ayliq=(credit +(credit*faiz/100))/ay
// alert(`ayliq odenis${ayliq}`)

// task8
// var name = prompt("adinizi daxil edin")
// var surename = prompt("soyadinizi daxil edin")
// alert(`salam ${name} ${surename}`)

// task9
// var a = Number(prompt("a"))
// var b = Number(prompt("b"))
// var p = (a + b) / 2
// var s = a * b
// alert(`terefi ${a} ve ${b} olan duzbucaqlinin perimetri ${p} sahesi ise ${s} dir`)

 // task10
// var a = Number(prompt("a"))
// var b = Number(prompt("b"))
// var ck=(a+b)**3
// var kc=(a**3+ (b**3))
// alert(`a ve b nin ceminin kubu ${ck} dir kublar cemi ise ${kc}dir`)


