// 5.1 Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

export const summation = (num: number) => {
    let total: number = 0;
    for (let i: number = 0; i <= num; i++) {
        total += i;
    }
    return total;
}

export const summation2 = (num: number) => num * (num + 1) / 2;

// *   *   *   *   *   *   

// 5.2. Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

export function doubleChar(str: string): string {
    str.split("");
    let newArr: any = [];
    for (let i: number = 0; i < str.length; i++) {
        newArr.push(str[i] + str[i]);
    }
    return newArr.join("");
}

// *   *   *   *   *   *   

// 5.3. Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str: string, ending: string): boolean {
    if (ending == "" || str == ending){
      return true;
    }
    return str.indexOf(ending) == 0? false : str.split(`${ending}`).at(-1) === "";
  }

// or

function solution(str: string, ending: string): boolean {
    return str.endsWith(ending);
  }