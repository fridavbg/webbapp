import { Picker } from "@react-native-picker/picker";
import { useState, useEffect } from "react";

import productModel from "../../models/products";

export default function ProductDropDown(props) {
    const [products, setProducts] = useState<Products[]>([]);
    let productsHash: any = {};

    useEffect(async () => {
        setProducts(await productModel.getProducts());
    }, []);

    const itemsList = products.map((prod, index) => {
        productsHash[prod.id] = prod;
        return <Picker.Item key={index} label={prod.name} value={prod.id} />;
    });

    return (
        <Picker
            selectedValue={props.delivery?.product_id}
            onValueChange={(itemValue) => {
                props.setDelivery({ ...props.delivery, product_id: itemValue });
                props.setCurrentProduct(productsHash[itemValue]);
            }}
        >
            {itemsList}
        </Picker>
    );
}
