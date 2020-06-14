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
            <section className='input-group-header'>
                <h2>Add Toppings</h2>
                <h3>Choose up to 10</h3>
            </section>
            <section className='input-group-header'>
                <h2>Choice of Substitute</h2>
                <h3>Choose up to 1</h3>
            </section>
            <section className='input-group-header'>
                <h2>Special Instructions</h2>
            </section>
        </Form>
    );
};

export default PizzaForm;