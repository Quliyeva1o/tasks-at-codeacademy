// 1. Daxil edilən iki arrayi birləşdirən funksiya yazın.
// console.log(concatArray([1,2,3,4,5],[6,7,8,9]))
// [1,2,3,4,5,6,7,8,9]
function concatArray(arr1, arr2) {
    return arr1.concat(arr2);
}
// console.log(concatArray([1, 2, 3, 4, 5], [6, 7, 8, 9]));




// 2. Bir funksiya yazın 2 parametr qəbul etsin. 2 ci parametr 1ci parametr qədər array-ə yazılsın.
// console.log(array_filled(6, 0));
// Expected Output:
// [0, 0, 0, 0, 0, 0]
function array_filled(say, element) {
    arr = []
    for (i = 0; i < say; i++) {
        arr.push(element)
    }
    return arr
}
// console.log(array_filled(6, 1));






// 3. Bir funksiya yazın , 3 parametr qəbul etsin.Birincisi array olsun ikinci və rəqəm arraydəki elementin hal-hazırda olduğu mövqeni, 3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirin.
// Məsələn:
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// Expected Output:
// [20, 30, 10, 40, 50]

const move = (array, from, to) => {
    const item = array[from];
    array.splice(from, 1);
    array.splice(to, 0, item);
    return array;
};
// console.log(move([10, 20, 30, 40, 50], 0, 2));




// 4. Bir funksiya yazın 2 parametr qəbul etsin, birinci başlanğıcı ikinci sonu göstərsin. Siz isə arada qalan rəqəmləri doldurun.
// Məsələn:
// console.log(range(1, 4));
// Expected Output:
// [1, 2, 3, 4]
function range(first, end) {
    arr = []
    for (i = first; i <= end; i++) {
        arr.push(i)
    }
    return arr;
}
// console.log(range(1, 4));





// 5.Daxil edilən arraydə təkrarlanan elementi silən və yeni array qaytaran funksiya yazın.
// Məsələn:
// console.log(deleteRepeate([1, 2, 2, 3, 4, 4, 5]))
// console.log(deleteRepeate([1, 2, 3, 4, 5]))
// console.log(deleteRepeate([1, -2, -2, 3, 4, -5, -6, -5]))

// Expected Output:
// [1,2,3,4,5]
// [1,2,3,4,5]
// [1,-2,3,4,-5,-6]
function deleteRepeate(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// console.log(deleteRepeate([1, 2, 2, 3, 4, 4, 5]));
// console.log(deleteRepeate([1, 2, 3, 4, 5]));
// console.log(deleteRepeate([1, -2, -2, 3, 4, -5, -6, -5]));








// 6.
// Daxil edilən iki arraydə fərqli olan elementləri qaytaran funksiya yazın.
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// Expected Output:
// [3, 10, 100]

function difference(arr1, arr2) {
   
    newarr = []
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            newarr.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            newarr.push(arr2[i]);
        }
    }
    return newarr;
}

// console.log(difference([1, 2, 3], [100, 2, 1, 10]));







// 7.
// Funksiyanı yazın.
// console.log(deep([1, [2], [3, [[4]]],[5,6]]));
// Expected Output:
// [1, 2, 3, 4, 5, 6]

function deep(arr){
flat=arr.flat().flat().flat()
return flat
}
console.log(deep([1, [2], [3, [[4]]],[5,6]]));



// 8.
//  Bir funksiya yazın iki parametr qəbul etsin. Birinci parametr rəqəmlərdən ibarət array , ikinici parametr isə rəqəm olsun. Arraydəki bütün  rəqəmlər daxil edilən ikinci parametrin bölənləridirsə, funksiya true return etsin, yox bir dənəsi belə böləni deyilsə false qaytarsın.

// console.log(checkFactors([2,3,4,6],12))
// Expected Output:
// true
// console.log(checkFactors([2,3,4,5],12))
// Expected Output:
// false

// 9. Daxil edilən cümlənin bütün sözlərinin ilk hərfini böyük edərək qaytaran funksiya yazın.

// sentenceCapitalization("a short sentence")
// Expected Output:
// "A Short Sentence"

// 10. Daxil edilən stringi aşağıdakı kimi dəyişdirin.

// Replace("5.5.5.5.5")

// Expected Output:
// 5[.]5[.]5[.]5[.]5

// 11.Daxil edilən cümlədə necə söz olduğun tapan funksiya yazın.


// 12. Daxil edilən cümlədə ən uzun sözü tapın.
// sentenceCapitalization("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolores.")

// Expected Output:
// consectetur