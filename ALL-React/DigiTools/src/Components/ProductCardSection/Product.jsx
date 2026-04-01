import React from 'react'
import ProductCard from './ProductCard'
const Product = ({productData,setselectCard,selectCard}) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    productData.map((product,index) => <ProductCard key={index} product={product} selectCard={selectCard} setselectCard={setselectCard}></ProductCard>)
                }
            </div>
        </div>
    )
}

export default Product
