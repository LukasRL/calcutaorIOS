import { useEffect, useRef, useState } from "react"

enum Operator {
    add='+',
    subtract='-',
    multiply='x',
    divide='÷'
}



export const useCalculator = () => {

    const [formula, setFormula]=useState('');

    const [number, setNumber]= useState('0');

    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator>()

    useEffect(() => {
      
        if(lastOperation.current){
            const firstFormula= formula.split(' ').at(0);
            setFormula(`${firstFormula} ${lastOperation.current} ${number}`)
        }else{
            setFormula(number);
        }
        
    }, [number])

    useEffect( () => {
        const subResult = calculatedSubResult();
        setPrevNumber(`${subResult}`)
    },[formula])
    

    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        lastOperation.current = undefined;
        setFormula('')
    }

    const deleteOperation = () => {
        let currentSign = '-';
        let temporalNumber = number.substring(1);

        if(number.includes('-')){
            currentSign = '-';
            temporalNumber = number.substring(1)
        }

        if(temporalNumber.length > 1){
            return setNumber( currentSign + temporalNumber.slice(0, -1));
        }

        setNumber('0');
        
    }

    const toggleSign = () => {

        if(number.includes('-')){
            return setNumber(number.replace('-', ''))
        }

        setNumber('-'+ number);
    }

    const buildNumber = (numberString: string) => {
        if(number.includes('.') && numberString === '.') return;

        if(number.startsWith('0') || number.startsWith('-0')){

            //punto decimal
            if(numberString==='.'){
                return setNumber(number + numberString);
            }

            //evaluar si es otro cero y no hay punto
            if(numberString==='0' && number.includes('.')){
                return setNumber(number+numberString);
            }

            //evaluar si es diferente de cero, no hay punto decimal y es el primer numero
            if(numberString!=='0' && !number.includes('.')){
                return setNumber(numberString);
            }

            //evitar 00000
            if(numberString==='0' && !number.includes('.')){
                return;
            }

            return setNumber(number+ numberString)
        }

        setNumber(number+numberString);
    }

    const setLastNumber = () => {
        calculateResult();
        if(number.endsWith('.')){
            setPrevNumber( number.slice(0, -1))
        }else {
            setPrevNumber(number)
        }

        setNumber('0');
    }

    const divideOperation = () => {
        
        setLastNumber();
        lastOperation.current = Operator.divide;
    }
    const multlipyOperation = () => {
        
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }
    const addOperation = () => {
        
        setLastNumber();
        lastOperation.current = Operator.add;
    }
    const subtractOperation = () => {
        
        setLastNumber();
        lastOperation.current = Operator.subtract;
    }

    const calculateResult = () => {
        const result = calculatedSubResult()
        setFormula(`${result}`);
        lastOperation.current = undefined;
        setPrevNumber('0')
    }

    const calculatedSubResult = ():number => {
        const [firstValue, operation, secondValue] = formula.split(' ');

        const num1 = Number(firstValue);
        const num2 = Number(secondValue);

        if(isNaN(num2))return num1

        switch (lastOperation.current) {

            case Operator.add:
                return num1 + num2;
                //setNumber(`${num1 + num2}`)
                // setPrevNumber(`${num1} + ${num2}`)
                // break;
            case Operator.divide:
                return num1 / num2;
                // setNumber(`${num2 / num1}`)
                // setPrevNumber(`${num2} ÷ ${num1}`)
                // break;
            case Operator.multiply:
                return num1 * num2
                // setNumber(`${num1 * num2}`)
                // setPrevNumber(`${num1} * ${num2}`)
                // break;
            case Operator.subtract:
                return num1 - num2
                // setNumber(`${num2 - num1}`)
                // setPrevNumber(`${num2} - ${num1}`)
                // break;
            default:
                throw new Error('Operation not implemented');
        }
    }

  return {
    // Properties
    number,
    prevNumber,
    formula,
    //methods
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    multlipyOperation,
    addOperation,
    subtractOperation,
    divideOperation,
    calculateResult
    }
}

