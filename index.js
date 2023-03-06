let id = "1235478961322312"
let lastfive = id.substr(-4);
// console.log(lastfive)

if (id.split("").length <= 4) {
    console.log(id);
} else {
    let char = id.substr(-4)
    let maskedChar = id.slice(0, -4).split("");
    let newChar = []
    
    for (let i = 0; i < maskedChar.length; i++) {
        newChar.push("#")
    }
    console.log(newChar.join("").concat(char))
}