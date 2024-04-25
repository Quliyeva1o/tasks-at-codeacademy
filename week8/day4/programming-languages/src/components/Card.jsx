import React from 'react'
import languages from './data'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Card1 = () => {
    return (
        <>
            {languages.map((e) =>

                <Card key={e.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={e.img} />
                    <Card.Body>
                        <Card.Title>{e.title}</Card.Title>
                        <Card.Text>${e.price}</Card.Text>
                        <Button variant="primary" onClick={
                            (e) => {
                                e.preventDefault()
                            }
                        }>Delete</Button>
                    </Card.Body>
                </Card>
            )
            }
        </>
    )
}

export default Card1
