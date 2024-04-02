//Bir funksiya yazın,string şəklində 2 parametr qəbul etsin.Funksiyanız bu sözlərin anagram olub-olmadığını tapmalıdır. Anagram sözlər yerləri fərqli olsa da eyni hərflərdən təşkil olunmuş sözlərdir.


c = function (a, b) {
    a=a.split('').sort().join('')
    b=b.split('').sort().join('')
    if(a==b){
        console.log("true")
    }
    else{
        console.log("false")
    }
    
}
// c("rena", "aner")
