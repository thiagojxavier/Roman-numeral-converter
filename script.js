const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const romanNumerals = [
  {
    '1000': 'M'
  },
  {
    '500': 'D' 
  },
  {
    '100': 'C'
  },
  {
    '50': 'L'
  },
  {
   '10': 'X' 
  },
  {
   '5': 'V'
  },
  {
   '1': 'I'
  }
]

const numberOfHouses = [returnsUnitNumbersInRoman, returnsDozensNumbersInRoman, returnsHundredsNumbersInRoman, returnsUnitOfThousandsNumbersInRoman];

function handleResult() {

  output.classList.remove('active');

  const dividingEachPartOfTheNumberIntoArray = Array.from(numberInput.value);

  const quantityOfDigits = dividingEachPartOfTheNumberIntoArray.length

  const valueInputNumber = numberInput.value

  const isTheValueInvalid = checkIfEmptyValue(valueInputNumber) ||
                            checkIfValueNegative(valueInputNumber) ||
                            checkIfValueHasMoreThan4Digits(quantityOfDigits) ||
                            checkIfValueThan3999(valueInputNumber) ||
                            checkIfValueIsE(dividingEachPartOfTheNumberIntoArray)

  if(isTheValueInvalid) {
    return
  }

  
  transformNumberInNumeralsRoman(dividingEachPartOfTheNumberIntoArray, quantityOfDigits)

}

function checkIfEmptyValue(valueInputNumber) {
  if(valueInputNumber === "") {
    output.classList.add('active');
    output.textContent = 'Please enter a valid number'
    numberInput.value = ""
    return true
  }

  return false
}

function checkIfValueNegative(valueInputNumber) {
  if(Number(valueInputNumber) < 0) {
    output.classList.add('active');
    output.textContent = 'Please enter a number greater than or equal to 1'

    numberInput.value = ""

    return true
  }

  return false
}

function checkIfValueHasMoreThan4Digits(quantityDigits) {
  if(quantityDigits > 4) {
    output.classList.add('active');
    output.textContent = 'Please enter a number less than 4 digits'

    numberInput.value = ""

    return true
  }

  return false
}

function checkIfValueThan3999(valueInputNumber) {
  if(Number(valueInputNumber) > 3999) {
    output.classList.add('active');
    output.textContent = 'Please enter a number less than or equal to 3999'

    numberInput.value = ""

    return true
  }

  return false
}

function checkIfValueIsE(dividingEachPartOfTheNumberIntoArray) {
  dividingEachPartOfTheNumberIntoArray.forEach(item => { 
    if(item == 'e') {
      output.classList.add('active');
      output.textContent = 'Please enter a valid number'

      numberInput.value = ""

      return true
    }

    return false
  })
}

function transformNumberInNumeralsRoman(arrayNumber, quantityOfDigits) {

  const arrayNumberReverse = invertTheArrayNumber(arrayNumber);

  let numeralsRomanInStringArray = []

  for(let i = 0; i < quantityOfDigits; i++) {

    const number = arrayNumberReverse[i]
    const takingMethodByDecimalNumbering = numberOfHouses[i];

    const arrOfNumbersInRoman = takingMethodByDecimalNumbering();


  const isNumber0 = number === 0
  const isNumbersLessThan4 = number < '4';
  const areTheNumbers4Or9 = number === '4' || number === '9';
  const isNumber5 = number === '5';
  const isNumbersGreater5andLessThan9 = number < '9' && number > '5'; 

  if(isNumber0) {
    numberBetween1And3InRomanNumerals.push([''])
  }

  if(isNumbersLessThan4) {

    const getNumberOneObjValue = arrOfNumbersInRoman[0]

    let numberBetween1And3InRomanNumerals = ''

    for(let i = 0; i < number; i++) {
      numberBetween1And3InRomanNumerals += getNumberOneObjValue;
      
    }

    numeralsRomanInStringArray.push(numberBetween1And3InRomanNumerals)


  }

  if(areTheNumbers4Or9) {

    if(number === '4') {
      const getNumberObjValue = arrOfNumbersInRoman[1]
      const number4or9inRomanNumerals = `${arrOfNumbersInRoman[0]}${getNumberObjValue}`

      numeralsRomanInStringArray.push(number4or9inRomanNumerals)
    }

    if(number === '9') {
      const getNumberObjValue = arrOfNumbersInRoman[2]
      const number4or9inRomanNumerals = `${arrOfNumbersInRoman[0]}${getNumberObjValue}`

      numeralsRomanInStringArray.push(number4or9inRomanNumerals)
    } 
     

  }

  if(isNumber5) {
    numeralsRomanInStringArray.push(`${arrOfNumbersInRoman[1]}`)
  }

  if(isNumbersGreater5andLessThan9) {
    const getNumberOneObjValue = arrOfNumbersInRoman[0]

    let numberBetween1And3 = ''

    const parameterNumberMinus5 = number - 5;

    for(let i = 0; i < parameterNumberMinus5; i++) {
      numberBetween1And3 += getNumberOneObjValue;
    }
    
    const numberBetween5And9InRomanNumerals = `${arrOfNumbersInRoman[1]}${numberBetween1And3}`

    numeralsRomanInStringArray.push(numberBetween5And9InRomanNumerals)
  }
  }

  showResult(numeralsRomanInStringArray)

}

function showResult(resultInRomanNumerals) {

    const storeResultInReverseString = resultInReverseString(resultInRomanNumerals)

    output.classList.add('active');
    output.textContent = storeResultInReverseString

    numberInput.value = ""

}

function invertTheArrayNumber(arrayNumber) {
  const reverseArray = []

  for(let i = arrayNumber.length; i > 0; i--) {
    const getLastNumberArray = arrayNumber.pop()
    reverseArray.push(getLastNumberArray)
  }
    
  return reverseArray
}

function returnsUnitNumbersInRoman() {
  const numbersNeededInTheUnit = ['1', '5', '10'];
  const numbersUsedInTheUnitRoman = [];

  numbersNeededInTheUnit.forEach(item => {
    const storedNumberRoman = findValueObjInRomanNumerals(item);
    numbersUsedInTheUnitRoman.push(storedNumberRoman);
  })

  return numbersUsedInTheUnitRoman

}

function returnsDozensNumbersInRoman() {
    const numbersNeededInTheDozens = ['10', '50', '100'];
  const numbersUsedInTheDozensRoman = [];

  numbersNeededInTheDozens.forEach(item => {
    const storedNumberRoman = findValueObjInRomanNumerals(item);
    numbersUsedInTheDozensRoman.push(storedNumberRoman);
  })

  return numbersUsedInTheDozensRoman
}

function returnsHundredsNumbersInRoman() {
    const numbersNeededInTheHundreds = ['100', '500', '1000'];
  const numbersUsedInTheHundredsRoman = [];

  numbersNeededInTheHundreds.forEach(item => {
    const storedNumberRoman = findValueObjInRomanNumerals(item);
    numbersUsedInTheHundredsRoman.push(storedNumberRoman);
  })

  return numbersUsedInTheHundredsRoman
}

function returnsUnitOfThousandsNumbersInRoman() {
    const numbersNeededInTheUnitOfThousands = ['1000'];
  const numbersUsedInTheUnitOfThousandsRoman = [];

  numbersNeededInTheUnitOfThousands.forEach(item => {
    const storedNumberRoman = findValueObjInRomanNumerals(item);
    numbersUsedInTheUnitOfThousandsRoman.push(storedNumberRoman);
  })

  return numbersUsedInTheUnitOfThousandsRoman
}

function findValueObjInRomanNumerals(numberRequest) {
  const getObjInRomanNumerals = romanNumerals.find((item) => item[numberRequest])
  const getValueOfObj = Object.values(getObjInRomanNumerals)
  
  return getValueOfObj
}

function resultInReverseString(result) {

  const arrayReverse = invertTheArrayNumber(result);
  const arrayReverseInString = arrayReverse.join('')

  return arrayReverseInString
}

convertBtn.addEventListener('click', handleResult );
