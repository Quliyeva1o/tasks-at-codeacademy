function getFullNamer(fname, surename, age, city) {
    console.log(`${fname} ${surename} is ${age} years old and lives in ${city}`)
    return getFullNamer
}
getFullNamer("rena", "quliyeva", 19, "baku")

const getFullName = function(fname, surename, age, city) {
   console.log(`${fname} ${surename} is ${age} years old and lives in ${city}`)
    return getFullName
}
getFullName("rena","quliyeva", 19, "baku")

function getfullnamee(){
    fname="rena"
    surename="quliyeva"
    age=19
    city="baku"
    console.log(`${fname} ${surename} is ${age} years old and lives in ${city}`)

}
getfullnamee()


const getfullnamearrow=(fname,surename,age,city)=>`${fname} ${surename} is ${age} years old and lives in ${city}`
console.log(getfullnamearrow("rena","quliyeva",19,"baku"))