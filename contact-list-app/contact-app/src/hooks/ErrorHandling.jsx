import React from 'react'

const ErrorHandling = () => {

    const [Error, setError] = useState({});
    
    const validate=(value)=>{
        let tempErrorObj={};
        if(!value.name) tempErrorObj='Name is required';
        if(!value.phone) tempErrorObj='Phone is required';
        if(!value.email.includes('@')) tempErrorObj='Email is required';

        setError(tempErrorObj);
        return Object.keys(tempErrorObj).length=== 0;
    }
  return (
    <div>{Error,validate}</div>
  )
}

export default ErrorHandling