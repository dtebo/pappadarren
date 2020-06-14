import React from 'react';

import './Form.css';

import {
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
                <Input type="select" id='size' name='size' />
            </FormGroup>
        </Form>
    );
};

export default PizzaForm;