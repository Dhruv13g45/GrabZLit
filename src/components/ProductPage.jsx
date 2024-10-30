import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReviewComponent from "./ReviewComponent"

const ProductPage = ({ productInfo }) => {
    const [singleProductData, setSingleProductData] = useState({})
    const navigate = useNavigate();
    const stockCount = 250;
    const singleProductApi = `https://fakestoreapi.com/products/${productInfo.productId}`


    const fetchSpecificProduct = async () => {
        const response = await fetch(singleProductApi);
        if (response.ok) {
            try {

                const data = await response.json();
                console.log(data)
                setSingleProductData(data);
                console.log(singleProductData)
            }
            catch (error) {
                console.log("data fetching error", error.status)
            }
        }
    }

    useEffect(() => {
        fetchSpecificProduct();
    }, [])

    const backBtnToggle = (e) => {
        e.preventDefault()
        navigate(0);
    }

    return (
        <div className='w-full p-3'>
            <button className='text-lg w-[10%] font-bold p-3 hover:border-[3px] bg-black text-white hover:border-black rounded-md hover:bg-white hover:text-black duration-150' onClick={backBtnToggle}>
                Go Back
            </button>
            <div className='w-full flex justify-evenly items-center'>
                <div className='w-[30%]'>
                    <img src={singleProductData.image} alt={singleProductData.title} className='w-full' />
                </div>
                <div className='w-[50%] flex flex-col gap-3'>
                    <h1 className='text-3xl font-bold'>{singleProductData.title}</h1>
                    <h2 className='text-xl '>{singleProductData.description}</h2>
                    <h1 className='text-2xl font-bold'>Price : $ {singleProductData.price}</h1>
                    <h3 className='text-lg font-bold'>Category : {singleProductData.category}</h3>
                    <h3 className='text-lg font-bold'>Stock : {stockCount}</h3>

                    {/* <h3 className='text-lg font-bold'>Rating : {singleProductData.rating.rate}</h3> */}
                    <button className='text-lg w-full font-bold p-3 hover:border-[3px] bg-black text-white hover:border-black rounded-md hover:bg-white hover:text-black duration-150'>
                        Add to Cart
                    </button>
                    <button className='text-lg w-full font-bold p-3 hover:border-[3px] bg-black text-white hover:border-black rounded-md hover:bg-white hover:text-black duration-150'>
                        Add to WishList
                    </button>
                    <button className='text-lg w-full font-bold p-3 hover:border-[3px] bg-black text-white hover:border-black rounded-md hover:bg-white hover:text-black duration-150'>
                        Give Feedback
                    </button>
                </div>
            </div>
            <ReviewComponent singleProductCategory={singleProductData.category} />
        </div>
    )
}

export default ProductPage
