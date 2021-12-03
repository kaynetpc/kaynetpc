import React from 'react'
import PasswordField from './PasswordField';

function FormInput({onChange, onBlur, label, id, className, name, title, type, data, placeholder, style,
    readOnly, required, tag, children,defaultValue, value, on}) {


        
    //Set name as id if ID is not found
    id = id || name;
    let classname = className === undefined ? "form-input" : `${className} form-input`;

    const handleChange =(e)=>{
        onChange(e);
    }

    const handleBlur =(e)=>{

        if(onBlur !== undefined){
            onBlur(e);
        }
    }

    var mainTag = null;
    switch (tag) {
        case "i":
            mainTag = <input type={type} 
            id={id}
            placeholder={placeholder} 
            required={required} 
            name={name} 
            value={value}
            defaultValue={defaultValue}
            data-type={data}
            readOnly={readOnly}
            onBlur = {handleBlur}
            onChange={handleChange} />
            break;
        case "s":
            mainTag = <select 
            required={required}
            id={id}
            name={name} 
            value={value}
            defaultValue={defaultValue}
            data-type={data}
            readOnly={readOnly}
            disabled={readOnly}
            onBlur = {handleBlur}
            onChange={handleChange}>{children}</select>
            break;
        case "t":
            mainTag = <textarea 
            placeholder={placeholder} 
            id={id}
            required={required} 
            name={name} 
            value={value}
            defaultValue={defaultValue}
            data-type={data}
            readOnly={readOnly}
            onBlur = {handleBlur}
            onChange={handleChange} />
            break;
        case "p":
            mainTag = <PasswordField 
            placeholder={placeholder} 
            id={id}
            required={required} 
            name={name}
            onBlur = {handleBlur}
            defaultValue={defaultValue}
            readOnly={readOnly}
            data-type={data}
            
            onChange={handleChange} />
            break;
        default:
            mainTag = <input type={type} 
            placeholder={placeholder} 
            id={id}
            required={required} 
            name={name} 
            data-type={data}
            value={value}
            readOnly={readOnly}
            onBlur = {handleBlur}
            defaultValue={defaultValue}
            style={style}
            title={title}
            onChange={handleChange} />       
            break;
    }

    return (
        <div className={classname}>
            <label title={label}><span>{on !== undefined ? "*" : ""}</span>{label}</label>
            {mainTag}
        </div>
    )
}

export default FormInput
