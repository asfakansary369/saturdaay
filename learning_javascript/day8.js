const name ="ashfaq"

const gameName = new String("asfaq-jade")


console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('4'));
console.log(gameName.indexOf('f'));


const newstring = gameName.substring(-7,3)
//console.log(newstring);


const anotherstring = gameName.slice(-2,1)
console.log(anotherstring);




// const newwstring = "    ashuJade.    "
// console.log(newwstring);
// console.log(newwstring.trim());





const url ="https://www.instagram.com/reel/DbZpPZpseGU/?igsh%29OXdsb29sMmxoaHc2"
console.log(url)
console.log(url.replace("%29","_"))

console.log(url.includes("ashfaq"));
console.log(url.includes("instagr"));

console.log(gameName.split('-'));


