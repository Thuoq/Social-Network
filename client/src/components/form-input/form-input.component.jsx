import React from 'react';

const FormInput  = ({handleChange,...props}) => ( 
    <input onChange = {handleChange} {...props} />
)

export default FormInput;