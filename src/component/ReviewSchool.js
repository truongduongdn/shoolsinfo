import React, { useState } from 'react';
import '../styles/reviewschool.css';


function ReviewSchool(props) {
    const [formData, setFormData] = useState({name: '', email: '',rating: '',review: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateFormData(formData);
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form data:', formData);
            setFormData({name: '', email: '',rating: '', review: ''});
            setErrors({});
        } else {
            // Form has errors, update state with errors
            setErrors(validationErrors);
        }
    };

    const validateFormData = (data) => {
        const errors = {};
        if (!data.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(data.email)) {
            errors.email = 'Please enter a valid email';
        }
        if (!data.rating.trim()) {
            errors.rating = 'Rating is required';
        }
        if (!data.review.trim()) {
            errors.review = 'Review is required';
        }
        return errors;
    };

    const isValidEmail = (email) => {
        // email validation regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating:</label>
                    <select id="rating" name="rating" value={formData.rating} onChange={handleChange}>
                        <option value="">Select Rating</option>
                        <option value="1">1 Star</option>
                        <option value="2">2 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="5">5 Stars</option>
                    </select>
                    {errors.rating && <span className="error">{errors.rating}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="review">Review Text:</label>
                    <textarea id="review" name="review" rows="5" cols="30" value={formData.review} onChange={handleChange}></textarea>
                    {errors.review && <span className="error">{errors.review}</span>}
                </div>
                <button type="submit" className="btn btn-success">Send your review</button>
            </form>
        </div>
    );
}

export default ReviewSchool;
