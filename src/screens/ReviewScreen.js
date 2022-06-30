import * as React from 'react';

export default function ReviewScreen() {

    const [description, setDescription] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [reviewArr, setReviewArr] = React.useState(JSON.parse(localStorage.getItem("allEntries")) || []);

    return (
        
        <div>
            <h2 className='mb-4 text-center'>Previous Reviews</h2>
            <DisplayAllReviews reviewsArr={reviewArr}/>

            <h2 className='mb-4 text-center'>Write a Review</h2>
            <div className='mt-5'>
                <input type="text" onInput={e => {setDescription(e.target.value)}} aria-label="Description" placeholder="Write your review here ..." className="form-control px-4 py-3 mt-3"></input>
                <input type="text" onInput={e => {setName(e.target.value)}} aria-label="Name" placeholder="Name" className="form-control px-4 py-3 mt-3"></input>
                <input type="text" onInput={e => {setEmail(e.target.value)}} aria-label="Email" placeholder="Email" className="form-control px-4 py-3 mt-3"></input>
                <input type="text" onInput={e => {setPhone(e.target.value)}} aria-label="Phone Number" placeholder="Phone Number" className="form-control px-4 py-3 mt-3"></input>
            </div>
            <button className='btn btn-success' onClick={() => {
                var existingEntries = JSON.parse(localStorage.getItem("allEntries")) || [];
                var entry = {
                    "description": description,
                    "name": name,
                    "email": email,
                    "phone": phone
                };
                existingEntries.push(entry);
                localStorage.setItem("allEntries", JSON.stringify(existingEntries));
                setReviewArr(existingEntries);
            }}> Submit the Review </button>
        </div>
    )
}

function DisplayAllReviews(reviewsArr) {
    const allReviews = reviewsArr.reviewsArr; 
    return (
        allReviews.map((review, index) => {
            return (
                <div key={index} className='mb-4'>
                    <div className='d-flex'>
                        <div className='bg-secondary rounded-circle' style={{height: 30, width: 30}}></div>
                        <h5 className='px-2 text-center'>{review.name}</h5>
                    </div>
                    <p>{review.description}</p>
                </div>
            )
        })
    );
}