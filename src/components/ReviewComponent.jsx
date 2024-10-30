import React from 'react'
import ReviewInputComponent from "./ReviewInputComponent"
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItems } from "../redux/slices/reviewSlice"

const ReviewComponent = ({ singleProductCategory }) => {


    const [currentReview, setCurrentReview] = useState("")
    const reviewArray = useSelector((state) => state.reviews.nigga);
    const addReview = useDispatch();
    console.log(reviewArray);

    const handleReviewChange = (e) => {
        setCurrentReview(e.target.value);
    }


    const submitReview = (e) => {
        e.preventDefault();
        addReview(addItems({ review: currentReview, category: singleProductCategory }))
        alert("review Submitted");
        setCurrentReview("")
    }


    return (
        <div className='w-full mt-5'>
            <h1 className='text-center font-bold text-4xl'>Product Reviews</h1>
            <ReviewInputComponent submitReview={submitReview} handleReviewChange={handleReviewChange} currentReview={currentReview} />
        </div>
    )
}

export default ReviewComponent
