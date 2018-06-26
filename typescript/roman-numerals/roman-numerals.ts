class RomanNumerals {
  public static roman(arabicNumber: number):string {
      let romanNumber = "";
      if(!this.isNaturalNumber(arabicNumber)) {
        throw "Input is not a natural number";
      }
      if(arabicNumber >= 4000){
        throw "The input number is equal to or over 4000";
      }
      romanNumber += this.thousandsToRoman(arabicNumber);
      romanNumber += this.hundredsToRoman(arabicNumber);
      romanNumber += this.tensToRoman(arabicNumber);
      romanNumber += this.onesToRoman(arabicNumber);
      return romanNumber;
  }

  public static isNaturalNumber(inputNumber: number): boolean {
      if(isNaN(inputNumber)){
        return false;
      }
      if(inputNumber > 0 && inputNumber == Math.floor(inputNumber)){
        return true;
      }
      return false;
  }

  public static thousandsToRoman(arabicNumber: number): string {
      let thousands = Math.floor(arabicNumber/1000) % 10;
      return this.caseSwitchForRoman(thousands, ['M', '', '']);
  }
    public static hundredsToRoman(arabicNumber: number): string {
        let tens = Math.floor(arabicNumber/100) % 10;
        return this.caseSwitchForRoman(tens, ['C', 'D', 'M']);
    }
    public static tensToRoman(arabicNumber: number): string {
        let tens = Math.floor(arabicNumber/10) % 10;
        return this.caseSwitchForRoman(tens, ['X', 'L', 'C']);
    }
    public static onesToRoman(arabicNumber: number): string {
        let ones = arabicNumber % 10;
        return this.caseSwitchForRoman(ones, ['I', 'V', 'X']);
    }

  private static caseSwitchForRoman(singleDigit: number, romanDigits: string[]): string {
      if(romanDigits.length != 3){
        throw "String input to caseSwitchForRoman has to be an array of three elements e.g. ['I', 'V', 'X']"
      }
      switch(singleDigit) {
          case 0:
              return "";
          case 1:
              return romanDigits[0];
          case 2:
              return romanDigits[0]+romanDigits[0];
          case 3:
              return romanDigits[0]+romanDigits[0]+romanDigits[0];
          case 4:
              return romanDigits[0]+romanDigits[1];
          case 5:
              return romanDigits[1];
          case 6:
              return romanDigits[1]+romanDigits[0];
          case 7:
              return romanDigits[1]+romanDigits[0]+romanDigits[0];
          case 8:
              return romanDigits[1]+romanDigits[0]+romanDigits[0]+romanDigits[0];
          case 9:
              return romanDigits[0]+romanDigits[2];
          default:
            throw "Input must be a single digit number";
      }
  }
}

export default RomanNumerals
