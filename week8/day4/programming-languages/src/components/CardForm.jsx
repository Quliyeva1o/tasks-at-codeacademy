import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const CardForm = () => {
    return (
        <>
            <Container className='mt-5'>
                <Form>
                    <Row>
                        <Col>
                            <label htmlFor="coursename">Course Name</label>
                            <Form.Control />
                        </Col>
                        <Col>
                            <label htmlFor="courseprice">Course price</label>
                            <Form.Control />
                        </Col>
                        <Col>
                            <label htmlFor="courseimage">Course image</label>

                            <Form.Control />
                        </Col>
                    </Row>
                </Form></Container>
        </>
    )
}

export default CardForm
