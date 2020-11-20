import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../../routes/api/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Search() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})

     // Handles updating component state when the user types into the input field
     function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.author) {
            API.saveBook({
                title: formObject.title,
                author: formObject.author,
                description: formObject.description,
                image: formObject.image,
                link: formObject.link
            })
                .then(res => loadBooks())
                .catch(err => console.log(err));
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h1>What Books Should I Read?</h1>
                    </Jumbotron>
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="title"
                            placeholder="Title (required)"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="author"
                            placeholder="Author (required)"
                        />
                        <TextArea
                            onChange={handleInputChange}
                            name="description"
                            placeholder="Description (Optional)"
                        />
                        <TextArea
                            onChange={handleInputChange}
                            name="image"
                            placeholder="Image (Optional)"
                        />
                        <TextArea
                            onChange={handleInputChange}
                            name="link"
                            placeholder="Link (Optional)"
                        />
                        <FormBtn
                            disabled={!(formObject.author && formObject.title)}
                            onClick={handleFormSubmit}
                        >
                            Submit Book
              </FormBtn>
                    </form>
                </Col>
                </Row>
        </Container>
    );
}


export default Search;