import React from 'react'
import {Container, Col, Row, Form, Button} from 'react-bootstrap'


class Bootstrapatt extends React.Component{
    constructor(props){
        super(props);
        function create(){ alert("Creating..."); }
    }

render(){
    return(
        <div>
            <Container fluid="sm"><Form>
                <Form.Group> <Row>  <h1>    Employee Management     </h1>    </Row>
                 <Row>      Open book assignment submmitted by SANDHYA       </Row></Form.Group>
            <Form.Group><Row>
                <Col xs={1}><Button variant="primary" type="submit" size="sm" active> Create </Button></Col>
                <Col xs={1}><Button variant="primary" type="submit" size="sm" active> Read </Button></Col>
                <Col xs={1}><Button variant="primary" type="submit" size="sm" active> Update </Button></Col>
                <Col xs={1}><Button variant="primary" type="submit" size="sm" active> Delete </Button></Col>
                </Row></Form.Group>

                <Form.Group> <Row> Create New Employee  </Row>
                 </Form.Group>


                 <hr color="lightblue"></hr>


            <Form.Group><Row>
                    <Col xs={2}>First Name</Col>
                    <Col xs={3}> <Form.Control type="text" /></Col>
                    </Row></Form.Group>
            <Form.Group><Row>
                    <Col xs={2}>Sur Name</Col>
                    <Col xs={3}> <Form.Control type="text" /></Col>
                    </Row></Form.Group>
            <Form.Group><Row>
                    <Col xs={2}>Email</Col>
                    <Col xs={3}> <Form.Control type="text" /></Col>
                    </Row></Form.Group>
            </Form>
                    <Form.Group><Row>
                    <Col xs={2}>DOB</Col>
                    <Col xs={3}> <Form.Control type="text" /></Col>
                    </Row></Form.Group>
            <Form.Group><Row>
                <Col xs={2}> Gender </Col>
                <Col xs={1}><Form.Check type="radio" name="gender" id="Male" label="Male" ></Form.Check> </Col>
                <Col xs={1}><Form.Check type="radio" name="gender" id="Female"label="Female"></Form.Check></Col>
                </Row></Form.Group>
            <Form.Group>
                <Col xs={1}><Button variant="primary" type="submit" size="sm" active href="https://react-bootstrap.github.io/components/buttons/"> Create </Button></Col>
            </Form.Group>
            </Container>
        </div>
    );
}
}

export default Bootstrapatt 