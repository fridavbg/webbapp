import React from "react";
import { View, Text } from "react-native";
import { Base, Typography } from '../../styles';

export default function Header() {
    return (
        <View style={Base.header}>
            <Text style={Typography.header1}>
                Warehouse App
            </Text>
        </View>
    );
}

