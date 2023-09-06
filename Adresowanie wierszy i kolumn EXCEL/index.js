const range = ["B3:D5"];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function getCellAddresses(range) {
  const [start, end] = range.split(":");

  if (start === end) {
    return [];
  }

  const splitAddress = (addres) => {
    return [addres[0], addres.slice(1)];
  };
  const [startAdressCol, startAdressRow] = splitAddress(start);
  const [endAdressCol, endAdressRow] = splitAddress(end);

  const generateLetterAdress = (start, end) => {
    const arrLetter = [];
    const startIndex = ALPHABET.findIndex((index) => index === start);
    const endIndex = ALPHABET.findIndex((index) => index === end);
    for (let i = startIndex; i <= endIndex; i++) {
      arrLetter.push(ALPHABET[i]);
    }
    return arrLetter;
  };
  const generateNumberAdress = (start, end) => {
    const arrNumber = [];
    for (let i = Number(start); i <= Number(end); i++) {
      arrNumber.push(i);
    }
    return arrNumber;
  };
  const letter = generateLetterAdress(startAdressCol, endAdressCol);
  const number = generateNumberAdress(startAdressRow, endAdressRow);
  const arrAdress = [];

  for (let i = 0; i <= letter.length - 1; i++) {
    for (let j = 0; j <= number.length - 1; j++) {
      arrAdress.push(letter[i] + number[j]);
    }
  }
  const arrSort = arrAdress.sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    const letterA = a.match(/[A-Z]+/)[0];
    const letterB = b.match(/[A-Z]+/)[0];

    if (numA !== numB) {
      return numA - numB;
    } else {
      return letterA.localeCompare(letterB);
    }
  });
  return arrSort;
}

// function getCellAddresses(range) {
//   console.log(range);
//   const [start, end] = range.split(":");
//   if (start == end) {
//     return [];
//   } else {
//     //  console.log(start);
//     //  console.log(end);
// const splitAddress = (addres) => {
//   const addressCell = addres.split("");
//   const arrAdress = [];
//   const adressCalumn = addressCell[0];
//   arrAdress.push(adressCalumn);
//   //    console.log(addressCell);
//   //    console.log(adressCalumn);
//   const adressRow = (addressCell) => {
//     const row = [];
//     for (let i = 1; i < addressCell.length; i++) {
//       if (addressCell.length > 2) {
//         row.push(addressCell[i]);
//       } else {
//         row.push(addressCell[1]);
//       }
//     }
//     //      console.log(row.join(""));
//     arrAdress.push(row.join(""));
//   };
//   adressRow(addressCell);
//   //    console.log(arrAdress);
//   return arrAdress;
// };
//     const [startAdressCol, startAdressRow] = splitAddress(start);
//     const [endAdressCol, endAdressRow] = splitAddress(end);

//     //  console.log(splitAddress(start, end));

//     const alfabetLetter = () => {
//       const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//       const letter = alfabet.split("");
//       return letter;
//     };

//     const generateLetterAdress = (start, end) => {
//       const alfabet = alfabetLetter();
//       const arrLetter = [];
//       //    console.log(start, end);
//       const startIndex = alfabet.findIndex((index) => index === start);
//       const endIndex = alfabet.findIndex((index) => index === end);
//       for (let i = startIndex; i <= endIndex; i++) {
//         arrLetter.push(alfabet[i]);
//       }
//       //    console.log(arrLetter);
//       return arrLetter;
//     };
//     const generateNumberAdress = (start, end) => {
//       const arrNumber = [];
//       //    console.log(start, end);
//       for (let i = start; i <= end; i++) {
//         arrNumber.push(i);
//       }
//       //    console.log(arrNumber);
//       return arrNumber;
//     };
//     // generateLetterAdress(startAdressCol, endAdressCol);
//     // generateNumberAdress(startAdressRow, endAdressRow);
//     const generateArrayAdress = (arrLetter, arrNumber) => {
//       const Letter = generateLetterAdress(startAdressCol, endAdressCol);
//       console.log(Letter);
//       const Number = generateNumberAdress(startAdressRow, endAdressRow);
//       console.log(Number);
//       const arrAdress = [];
//       for (let i = 0; i <= Letter.length - 1; i++) {
//         for (let j = 0; j <= Number.length - 1; j++) {
//           arrAdress.push(Letter[i] + Number[j]);
//         }
//       }
//       console.log(arrAdress);
//       return arrAdress;
//     };
//     const arrSort = generateArrayAdress().sort((a, b) => {
//       const numA = parseInt(a.match(/\d+/)[0]);
//       const numB = parseInt(b.match(/\d+/)[0]);
//       const letterA = a.match(/[A-Z]+/)[0];
//       const letterB = b.match(/[A-Z]+/)[0];

//       if (numA !== numB) {
//         return numA - numB;
//       } else {
//         return letterA.localeCompare(letterB);
//       }
//     });
//     return arrSort;
//   }

//   console.log(arrSort);
// }
getCellAddresses(range);
