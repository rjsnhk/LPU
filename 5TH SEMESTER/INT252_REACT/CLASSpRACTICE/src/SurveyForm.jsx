import React, { useState } from 'react';

function SurveyForm() {
    const [question, setQuestion] = useState('');
    const [comments, setComments] = useState('');
    const [errors, setErrors] = useState({});

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
        if (errors.question) {
            setErrors((prevErrors) => ({ ...prevErrors, question: null }));
        }
    };

    const handleCommentsChange = (e) => {
        const text = e.target.value;
        if (text.length <= 200) {
            setComments(text);
            if (errors.comments) {
                setErrors((prevErrors) => ({ ...prevErrors, comments: null }));
            }
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                comments: 'Comments cannot exceed 200 characters.',
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        let validationErrors = {};

        if (!question) {
            validationErrors.question = 'This question is required.';
            valid = false;
        }

        if (comments.length > 200) {
            validationErrors.comments = 'Comments cannot exceed 200 characters.';
            valid = false;
        }

        setErrors(validationErrors);

        if (valid) {
            alert('Form submitted successfully!');
            // Add form submission logic here
            setQuestion('');
            setComments('');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
            <h2>Survey Form</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        <strong>Required Question:</strong>
                    </label>
                    <textarea
                        value={question}
                        onChange={handleQuestionChange}
                        rows="3"
                        placeholder="Please answer this question"
                        style={{ width: '100%', padding: '8px' }}
                    />
                    {errors.question && (
                        <p style={{ color: 'red' }}>{errors.question}</p>
                    )}
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>
                        <strong>Optional Comments (Max 200 characters):</strong>
                    </label>
                    <textarea
                        value={comments}
                        onChange={handleCommentsChange}
                        rows="3"
                        placeholder="Add your comments here"
                        style={{ width: '100%', padding: '8px' }}
                    />
                    {errors.comments && (
                        <p style={{ color: 'red' }}>{errors.comments}</p>
                    )}
                </div>

                <button type="submit" style={{ padding: '10px 20px' }}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default SurveyForm;
