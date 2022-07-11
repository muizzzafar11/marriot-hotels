import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export default function ReviewScreen() {

    const [description, setDescription] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [reviewArr, setReviewArr] = React.useState(JSON.parse(localStorage.getItem("allEntries")) || []);
    const [rating, setRating] = React.useState('');
    const handleRatingChange = (event) => {
        setRating(event.target.value);
      };

    return (
        <div className='page-body'>
            <h2 className='mb-4 text-center'>Previous Reviews</h2>
            <DisplayAllReviews reviewsArr={reviewArr}/>

            <h2 className='mb-4 text-center'>Write a Review</h2>
            <div className='mt-5'>
                <FormControl fullWidth className='mb-4'>
                    <InputLabel id="demo-simple-select-label">Rating (1-5)</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={rating}
                        label="Rating (1-5)"
                        onChange={handleRatingChange}
                    >
                        <MenuItem value={1}>1 - very unsatisfied</MenuItem>
                        <MenuItem value={2}>2 - unsatisfied</MenuItem>
                        <MenuItem value={3}>3 - neutral</MenuItem>
                        <MenuItem value={4}>4 - satisfied</MenuItem>
                        <MenuItem value={5}>5 - very satisfied</MenuItem>
                    </Select>
                </FormControl>
                <input type="text" onInput={e => {setDescription(e.target.value)}} aria-label="Description" placeholder="Write your review here ..." className="form-control px-4 py-3"></input>
                <input type="text" onInput={e => {setName(e.target.value)}} aria-label="Name" placeholder="Name" className="form-control px-4 py-3 mt-3"></input>
                <input type="text" onInput={e => {setEmail(e.target.value)}} aria-label="Email" placeholder="Email" className="form-control px-4 py-3 mt-3"></input>
                <input type="text" onInput={e => {setPhone(e.target.value)}} aria-label="Phone Number" placeholder="Phone Number" className="form-control px-4 py-3 mt-3"></input>
            </div>
            <button className='btn btn-success mt-4' onClick={() => {
                var existingEntries = JSON.parse(localStorage.getItem("allEntries")) || [];
                var entry = {
                    "description": description,
                    "name": name,
                    "email": email,
                    "phone": phone, 
                    "rating": rating
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
                    <p className='mb-0'><b>Rating (Out of): </b> {review.rating}</p>
                    <p>{review.description}</p>
                </div>
            )
        })
    );
}