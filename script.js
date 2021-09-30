function foo(){
let countryname=document.getElementById("name").value;

console.log(countryname)
async function compute(){
let data=await fetch(`https://api.covid19api.com/dayone/country/${countryname}`);

let data2=await data.json();
console.log(data2)
for(var i in data2){
console.log(`${countryname}:Deaths:${data2[i].Deaths} Active:${data2[i].Active} Confirmed:${data2[i].Confirmed} Date:${data2[i].Date}`)
}
}
compute();
}