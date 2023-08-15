import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// https://finalbooks.onrender.com/allData
// http://localhost:7000/allData

function ShowBook() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch data from your API using axios
        axios.get('https://finalbooks.onrender.com/allData')
            .then(response => {
                setBooks(response.data);
                console.log(response.data[0]._id)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const deleteBook = async (id) => {
        try {
            const response = await axios.delete(`https://finalbooks.onrender.com/delete/${id}`);

            if (response.status === 200) {
                console.log('Book deleted successfully');
                // Update the state to remove the deleted book
                setBooks(books.filter(book => book._id !== id));
            } else {
                console.error('Error deleting book');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Link to="/create-book" >
                <h1 style={{ backgroundColor: 'lightgreen', border: '2px solid black' , maxWidth: '700px', marginLeft: '500px'}}>Create A New Book</h1>
            </Link>

            <div className="card-container">
                {books.map(book => (
                    <div key={book.id} className="card">
                        <img src="/book.png" className="book-image" alt="book"></img>
                        <h1>{book.title}</h1>
                        <h2>{book.author}</h2>
                        <h3>{book.description}</h3>
                        <button type="button" style={{
                            fontSize: '40px', backgroundColor: 'red'
                        }} onClick={() => deleteBook(book._id)}>X</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShowBook;
