import { Text, View, StyleSheet} from 'react-native';

function Logo(){
    return(
        <View style={style.container}>
            <Text>HCLTECH</Text>
            <Text>Supercharging Progress</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor:  #7abef7,
    }
})

export default Logo;