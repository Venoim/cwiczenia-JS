function findMissingLetter(array) {
  const normalizedArray = (arr) => {
    const polacz = arr.join("");
    console.log(polacz);
    const unif = polacz.toLowerCase();
    const generationArr = unif.split("");
    console.log(generationArr);
    return generationArr;
  };
  const alfabetLetter = () => {
    const alfabet = "abcdefghijklmnopqrstuvwxyz";
    const letter = alfabet.split("");
    return letter;
  };
  const lostLetter = [];
  const searchBackLetter = (letters) => {
    console.log(letters[0]);
    const alfabet = alfabetLetter();
    console.log(alfabet);
    const firstIndex = alfabet.findIndex((index) => index === letters[0]);
    console.log(firstIndex);
    const endIndex = alfabet.findIndex(
      (index) => index === letters[letters.length - 1]
    );
    console.log(endIndex);
    for (let i = firstIndex; i < endIndex; i++) {
      if (letters[i] !== alfabet[i]) {
        if (letters[i] !== alfabet[i]) console.log("brak");
        lostLetter.push(alfabet[i]);
      }
      console.log("jest taka liera");
      continue;
    }
  };
  const result = [];
  const caseChaking = (arr) => {
    const polacz = arr.join("");
    if (polacz === polacz.toUpperCase()) {
      result.push(lostLetter[0].toUpperCase());
    } else {
      result.push(lostLetter[0]);
    }
  };
  searchBackLetter(normalizedArray(array));
  caseChaking(array);
  return result[0];
}
