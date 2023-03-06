// Link to challenge- https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

// Usually when you buy something, you're asked whether your credit card number, phone number or
// answer to your most secret question is still correct. However, since someone could look over your 
// shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.

const maskedCreditCard = (id) => {
  if (id.split("").length <= 4) {
    return id
  } else {
      let char = id.substr(-4)
      let maskedChar = id.slice(0, -4).split("");
      let newChar = []
      
      for (let i = 0; i < maskedChar.length; i++) {
          newChar.push("#")
      }
      return newChar.join("").concat(char)
  }
}

console.log(maskedCreditCard("12245"))
