import React from "react";
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Tile(props) {

    let { Title, Desc, imgURL } = props.data;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgURL} />
            <Card.Body>
                <Card.Title>{Title}</Card.Title>
                <Card.Text>{Desc}
                </Card.Text>
                <Button variant="primary">Get Services</Button>
            </Card.Body>
        </Card>
    );
}


export default Tile;
