import React from "react";
import { View, Text } from "react-native";
import { Base, Typography } from '../../styles';


export default function Invoices() {
    return (
        <View style={Base.header}>
            <Text style={Typography.footer} numberOfLines={1}>
                Invoices
            </Text>
        </View>
    );
}