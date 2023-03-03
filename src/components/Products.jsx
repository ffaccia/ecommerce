import styled from 'styled-components'

import {popularProducts} from "../data/data"
import Product from './ProductItem'
import CategoryItem from './CategoryItem'



const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  //justify-content: space-between;
`;

//console.log(categories)

/*
const Products = () => {
  return (
    <Container>Ciao</Container>
  )
}
*/

const Products = () => {
  return (
    <Container>
        {popularProducts.map((item) => (
            <>
       
              <Product item={item} key={item.id} ></Product>
            </>
        ))}

    </Container>
  )
}

export default Products