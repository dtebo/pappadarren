import React from 'react';

import './Form.css';

import {
    Container,
    Row,
    Col,
    CustomInput,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';

const PizzaForm = () => {
    return (
        <Form className='pizza-form'>
            <section className='input-group-header'>
                <h2>Choice of Size</h2>
                <h3>Required</h3>
            </section>
            <FormGroup>
                <Label for='size' />
                <Input type="select" id='size' name='size'>
                    <option value=''>Select</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='extralarge'>Extra Large</option>
                </Input>
            </FormGroup>
            <section className='input-group-header'>
                <h2>Choice of Sauce</h2>
                <h3>Required</h3>
            </section>
            <FormGroup check>
                <Label check>
                    <Input type='radio' name='sauce' id='sauce' />{' '}
                    Original Red
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type='radio' name='sauce' id='sauce' />{' '}
                    Garlic Ranch
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type='radio' name='sauce' id='sauce' />{' '}
                    BBQ Sauce
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type='radio' name='sauce' id='sauce' />{' '}
                    Spinach Alfredo
                </Label>
            </FormGroup>
            <section className='input-group-header'>
                <h2>Add Toppings</h2>
                <h3>Choose up to 10</h3>
            </section>
            <Container>
                <Row>
                    <Col>
                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' />{' '}
                                Pepperoni
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' />{' '}
                                Sausage
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' />{' '}
                                Canadian Bacon
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' />{' '}
                                Spicy Italian Sausage
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' />{' '}
                                Grilled Chicken
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' />{' '}
                                Onions
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' />{' '}
                                Green Pepper
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' />{' '}
                                Diced Tomatos
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' />{' '}
                                Black Olives
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' />{' '}
                                Roasted Garlic
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' />{' '}
                                Artichoke Hearts
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' />{' '}
                                Three Cheese
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' />{' '}
                                Pineapple
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' />{' '}
                                Extra Cheese
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
            </Container>
            <section className='input-group-header'>
                <h2>Choice of Substitute</h2>
                <h3>Choose up to 1</h3>
            </section>
            <FormGroup>
                <CustomInput type='switch' id='gluten' label='Gluten Free Crust (+ $1.00)' />
            </FormGroup>
            <section className='input-group-header'>
                <h2>Special Instructions</h2>
            </section>
            <FormGroup>
                <Input type='text' id='special-instructions' placeholder="Anything else you'd like to add?" />
            </FormGroup>
            <section className='total-section'>
                <Row>
                    <Col md={8}>
                        <FormGroup>
                            <Input type='number' name='number' id='number' placeholder='0' bsSize='lg' />
                        </FormGroup>
                    </Col>
                    <Col>
                        <Button type='submit' size='lg'>Add to Order    $0.00</Button>
                    </Col>
                </Row>
            </section>
        </Form>
    );
};

export default PizzaForm;