import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CreateBook.css';

// http://localhost:7000/save

function CreateBook() {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert('book added success')

        setTitle('');
        setAuthor('');
        setDescription('');


        const newBook = {
            title: title,
            author: author,
            description: description,
        };

        try {
            const response = await axios.post('https://finalbooks.onrender.com/save', newBook);

            if (response.status === 201) {
                console.log('Book added successfully');

            } else {
                console.error('Error adding book');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="CreateBook">
            <p>CreateBook</p>
            <div className='sho'>
                <Link to="/" >
                    Show Book List
                </Link>

            </div>
            <br></br>
            <br></br>


            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="author">Author:</label>
                        <input
                            type="text"
                            id="author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            required
                        />
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <br></br>
                    <button type="submit" style={{
                        fontSize: '20px'
                    }} >Add Book</button>

                </form>
            </div>


        </div>
    )
}

export default CreateBook;
