import React from 'react' 
import { Link } from 'react-router-dom'
import {Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap'


export default function (props) {
    return (
    <div className=''>
        <Container>
            <Jumbotron>
                <h2>Welcome to code lyfe.io</h2>
                <p>This is how to build a website with react, react-router and react-bootstrap</p>
            </Jumbotron>
        </Container>
    </div>
    )
}