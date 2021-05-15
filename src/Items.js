import React from 'react';
import Product from './Product';
import Image1 from './ProductImage/Image1.png';
import Image2 from './ProductImage/Image2.png';
import Image3 from './ProductImage/Image3.png';
import styled from 'styled-components';

const Itm = styled.div`
    display: flex;
`;

function Items() {
    return (
        <Itm>
            <Product
                id='1'
                product_name="Milk"
                description="Extra Creamy Milk"
                price={25}
                image={Image1}
            />
             <Product
                id='2'
                product_name="Milk"
                description="Extra Creamy Milk"
                price={25}
                image={Image2}
            />
             <Product
                id = '3'
                product_name = "Milk"
                description = "Extra Creamy Milk"
                price = {25}
                image = {Image3}
            />
            <Product
                id = '3'
                product_name = "Milk"
                description = "Extra Creamy Milk"
                price = {25}
                image = {Image3}
            />
            <Product
                id = '3'
                product_name = "Milk"
                description = "Extra Creamy Milk"
                price = {25}
                image = {Image3}
            />
        </Itm>
    )
}

export default Items;


