function arrayReplace(array, elemToReplace, substitutionElem){
    for(let i = 0; i < array.length; i++){
        if(array[i] === elemToReplace){
            array[i] = substitutionElem;
        }
    }
    return array;
}





describe('arrayReplace()', () => {
    it('adds a border around entire application', () => {

        // arrange
        const array = [1,2,3];
        const elemToReplace = 1;
        const substitutionElem = 3;

        // act
        const result = arrayReplace(array, elemToReplace, substitutionElem);

        // log
        console.log("result: ", result);        

        // assert
        expect(result).toEqual([3, 2, 3]);
    });
});


/********************stirng concate**********************/


function encloseInBrackets(str) {
     const solution1 = '(' + str + ')';
     const solution2 = `(${str})`;
    const solution3 = '('.concat(str, ')');
    
    return solution1+" "+solution2+" "+solution3;
}



/**
* Test Suite 
*/
describe('encloseInBrackets()', () => {
    it('adds () around a string', () => {
        // arrange
        const str = "Yo";
        
        // act
        const result = encloseInBrackets(str);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe('(Yo)');
    });
});

/********************************************************/


/********************factorial Number**********************/

function factorialNumber(num) {
    let sum = 1;
    
    for(let i = 1; i <= num; i++) {
        // sum = sum * i;
        sum *= i;
    }
    
    return sum;
}



/**
* Test Suite 
*/
describe('factorialNumber()', () => {
    it('returns factorial of number param', () => {
        // arrange
        const num = 5;
        
        // act
        const result = factorialNumber(num);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(120);
    });
});

/*********************************************************/

/**************First digit***********************/

function firstDigit(str) {
    const strNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const chars = str.split('');
    
    for(const char of chars) {
        if(strNums.includes(char)) {
            return char;
        }
    }
}



/**
* Test Suite 
*/
describe('firstDigit()', () => {
    it('return the first digit in a string', () => {
        // arrange
        const str = "var_1__Int2";
        
        // act
        const result = firstDigit(str);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe('1');
    });
});

/*********************************************************/