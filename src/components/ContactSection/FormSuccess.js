import React from 'react';
import '../../App.css'

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h3 className='form-success'>We have received your request!</h3>
      <img className='form-img-2' src= {require("../images/img-3.png")} alt='success-image' />
     
    </div>
  );
};

export default FormSuccess;
