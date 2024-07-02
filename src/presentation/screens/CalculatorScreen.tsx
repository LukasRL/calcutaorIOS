import { View, Text, Pressable } from "react-native"
import { globalStyles } from "../../config/theme/app-theme"
import { CalculatorButton } from "../components/CalculatorButton";
import { colors } from "../../config/theme/colors";
import { useCalculator } from "../hooks/useCalculator";


export const CalculatorScreen = () => {
    const {
        number,
        prevNumber,
        formula,
        buildNumber,
        clean,
        deleteOperation,
        toggleSign,
        multlipyOperation,
        addOperation,
        subtractOperation,
        divideOperation,
        calculateResult

    } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>

        <View style={{paddingHorizontal:30, paddingBottom:20}}>
            <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={globalStyles.mainResult}>
                    {/* {number} */}
                    {formula}
            </Text>

            { 
                (formula === prevNumber )
                ? <Text style={globalStyles.subResult}> </Text> 
                : (<Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={globalStyles.subResult}>
                        {prevNumber}
                    </Text>)
            }
        </View>


        <View style={globalStyles.row}>
            <CalculatorButton onPress={clean} label="C" color={colors.lightGray} blackTextColor/>
            <CalculatorButton onPress={toggleSign} label="+/-" color={colors.lightGray} blackTextColor/>
            <CalculatorButton onPress={deleteOperation} label="del" color={colors.lightGray} blackTextColor/>
            <CalculatorButton onPress={divideOperation} label="÷" color={colors.orange}/>
        </View>
        <View style={globalStyles.row}>
            <CalculatorButton onPress={()=>buildNumber('7')} label="7"/>
            <CalculatorButton onPress={()=>buildNumber('8')} label="8" />
            <CalculatorButton onPress={()=>buildNumber('9')} label="9" />
            <CalculatorButton onPress={multlipyOperation} label="x" color={colors.orange}/>
        </View>
        <View style={globalStyles.row}>
            <CalculatorButton onPress={()=>buildNumber('4')} label="4" />
            <CalculatorButton onPress={()=>buildNumber('5')} label="5" />
            <CalculatorButton onPress={()=>buildNumber('6')} label="6" />
            <CalculatorButton onPress={subtractOperation} label="-" color={colors.orange}/>
        </View>
        <View style={globalStyles.row}>
            <CalculatorButton onPress={()=>buildNumber('1')} label="1" />
            <CalculatorButton onPress={()=>buildNumber('2')} label="2" />
            <CalculatorButton onPress={()=>buildNumber('3')} label="3" />
            <CalculatorButton onPress={addOperation} label="+" color={colors.orange}/>
        </View>
        <View style={globalStyles.row}>
            <CalculatorButton onPress={()=>buildNumber('0')} label="0" dobleSize />
            <CalculatorButton onPress={()=>buildNumber('.')} label="." />
            <CalculatorButton onPress={calculateResult} label="=" color={colors.orange}/>
        </View>
    </View>
  );
};

