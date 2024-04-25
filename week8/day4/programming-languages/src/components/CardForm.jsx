import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const CardForm = ({ myData, setMydata}) => {
    const [coursename,setCourseName]=useState("")
    const [courseimage,setCourseImage]=useState("")
    const [courseprice,setCoursePrice]=useState("")
    return (
        <>
            <Container className='mt-5'>
                <Form
                 onSubmit={(a) => {
                    a.preventDefault()
                    const NewLanguage = {
                        img: courseimage,
                        title: coursename,
                        price: courseprice,
                    }
                    myData.push(NewLanguage)
                    setMydata([...myData],NewLanguage)
                    console.log(myData);

                }}
                >
                    <Row>
                        <Col>
                            <label>Course Name</label>
                            <input
                                type="text"
                                value={coursename}
                                onChange={(e)=>setCourseName(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <label >Course price</label>
                            <input
                                type="text"
                                value={courseprice}
                                onChange={(e)=>setCoursePrice(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <label >Course image</label>

                            <input
                                type="text"
                                value={courseimage}
                                onChange={(e)=>setCourseImage(e.target.value)}

                            />
                        </Col>
                    </Row>
                    <Button type='submit' >add</Button>
                </Form></Container>
        </>
    )
}

export default CardForm
