import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const Card1 = ({ myData, setMyData }) => {

    return (
        <>
            <Container className='mt-5 '>
                <Row className='justify-content-between'>
                    {myData.map((e) =>

                        <Card key={e.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={e.img} />
                            <Card.Body>
                                <Card.Title>{e.title}</Card.Title>
                                <Card.Text>${e.price}</Card.Text>
                                <Button  variant="primary" onClick={() => {
                                    if(window.confirm("are you sure delete")){
                                        setMyData(myData.filter((x)=>x.id!=e.id)
                                        )
                                    }           
                                }}

                                >Delete</Button>
                            </Card.Body>
                        </Card>
                    )
                    }
                </Row></Container>
        </>
    )
}

export default Card1
