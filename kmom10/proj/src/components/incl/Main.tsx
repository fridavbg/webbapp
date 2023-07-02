import { Image, Text, View ,ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Base, Typography } from '../../styles'
import mainDog from "../../../assets/images/mainDog.jpg";
import Header from './Header';

export default function Dog() { 
    return (
            <View style={Base.center}>
                <Header/>
                <Text style={Typography.text}>We are hoping You{'\n'}
                    Will find your New Best Friend{'\n'} VERY SOON</Text>
                    <TouchableOpacity
                    onPress={() => {
                        Alert.alert("Image of a", "Dog");
                    }}
                >
                     <Image source={mainDog} style={Base.image} />
                </TouchableOpacity>
            </View>
    )
};