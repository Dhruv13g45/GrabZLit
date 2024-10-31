import React, { useEffect } from 'react'
import ReviewInputComponent from "./ReviewInputComponent"
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItems } from "../redux/slices/reviewSlice"

const ReviewComponent = ({ singleProductCategory }) => {


    const [currentReview, setCurrentReview] = useState("")
    const reviewArray = useSelector((state) => state.reviews.reviews);
    const addReview = useDispatch();
    console.log(reviewArray)
    const handleReviewChange = (e) => {
        setCurrentReview(e.target.value);
    }


    const submitReview = (e) => {
        e.preventDefault();
        addReview(addItems({ review: currentReview, reviewProductCategory: singleProductCategory }))
        alert("review Submitted");
        setCurrentReview("")
    }

    useEffect(() => {
        {
            reviewArray.length > 0 && reviewArray.map((indivisualReview) => {
                return (
                    <>
                        <div>
                            <div className='w-full flex justify-start items-center gap-5'>
                                <h1>Lorem ipsum dolor</h1>
                            </div>
                            <p>
                                {indivisualReview.review}
                            </p>
                        </div>
                    </>
                );
            })
        }
    }, [reviewArray])

    return (
        <div className='w-full mt-5'>
            <h1 className='text-center font-bold text-4xl'>Product Reviews</h1>
            <ReviewInputComponent submitReview={submitReview} handleReviewChange={handleReviewChange} currentReview={currentReview} />
            <div className='z-[99]'>
                {

                }
            </div>
        </div>
    )
}

export default ReviewComponent
