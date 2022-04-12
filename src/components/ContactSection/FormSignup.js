import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import {Button}from '../Button'
import '../../App.css'

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h3>
          Get in touch with us, your flight towards Mars awaits.
        </h3>
        <div className='form-inputs'>
          <label className='form-label'>Full Name</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your Full Name'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Phone</label>
          <input
            className='form-input'
            type='number'
            name='phone'
            placeholder='Enter your Phone Number'
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Message</label> 
          <br></br>
          <textarea className='message' name="message"  rows="8" placeholder="Enter your message" value={values.message}
            onChange={handleChange}></textarea>
          {errors.message && <p>{errors.message}</p>}
        </div>
        <Button className='form-input-btn' type='submit'>
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default FormSignup;
