import { Pressable, Text,  } from "react-native"
import { globalStyles } from '../../config/theme/app-theme';
import { colors } from '../../config/theme/colors';

interface Props {
    label:string;
    color?:string;
    dobleSize?:boolean;
    blackTextColor?:boolean;
    onPress: () => void;
}



export const CalculatorButton = ({
    label,
    color = colors.darkGray,
    dobleSize = false,
    blackTextColor = false,
    onPress
}:Props) => {
  return (
    <Pressable
        onPress={ onPress}
        style={ ({pressed}) => ({
            ...globalStyles.button,
            backgroundColor: color,
            width: (dobleSize) ? 180 : 80,
            opacity: (pressed) ? 0.8 : 1,   
        })}
    >
        <Text style={{
            ...globalStyles.buttonText,
            color: (blackTextColor) ? colors.background : 'white'
        }}>{label}</Text>
    </Pressable>
  )
}


