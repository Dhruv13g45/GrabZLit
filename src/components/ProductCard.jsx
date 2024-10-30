import React from 'react'
import { useState } from 'react'
import ProductPage from "./ProductPage"


const ProductCard = ({ products }) => {

    const [clickState, setClickState] = useState(false);
    const [productInfo, setProductInfo] = useState({ productId: "", productCategory: "" });

    const viewProduct = (productIdKey, productCategoryKey, productIdValue, productCategoryValue) => {
        setProductInfo(prev => ({
            ...prev,
            [productIdKey]: productIdValue,
            [productCategoryKey]: productCategoryValue,
        }));
        setClickState(prev => !prev);
    }


    return (
        <>
            <div className='w-full mt-5 p-3'>

                {
                    clickState ? <ProductPage productInfo={productInfo} />
                        :
                        <>
                            <div className='grid grid-cols-3 gap-10 '>
                                {
                                    products.length > 0
                                    &&
                                    products.map((product) => (
                                        <div className='w-full flex flex-col text-center items-center justify-evenly  rounded-xl shadow-2xl p-5' key={product.id} >
                                            <div className='w-full h-[300px] flex justify-center items-center hover:scale-110 duration-200 hover:cursor-pointer overflow-y-hidden p-3' onClick={() => (viewProduct("productId", "productCategory", product.id, product.category))}>
                                                <img src={product.image} alt={product.title} className='w-[200px] -z-[9] ' />
                                            </div>


                                            <div className='w-full mt-3'>
                                                <p className='text-xl'>{product.title}</p>
                                                <div className='flex w-full flex-col justify-evenly items-center mt-5'>
                                                    <p className='text-3xl font-bold px-5 py-3 gap-5'>$ {product.price}</p>
                                                    <button className='text-lg w-full font-bold p-3 hover:border-[3px] bg-black text-white hover:border-black rounded-md hover:bg-white hover:text-black duration-150'>Add to WishList</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default ProductCard
