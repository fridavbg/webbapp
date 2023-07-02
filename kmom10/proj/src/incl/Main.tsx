import { Text, View ,ScrollView } from 'react-native';
import { Base, Typography } from '../styles'

export default function Dog() { 
    return (
        <ScrollView styles={Base.container}>
            <View style={Base.center}>
                <Text style={Typography.header2}>Welcome</Text>
                <Text style={Typography.text}>We are hoping You{'\n'}
                    Will find your New Best Friend{'\n'} VERY SOON</Text>
            </View>
        </ScrollView>
    )
};