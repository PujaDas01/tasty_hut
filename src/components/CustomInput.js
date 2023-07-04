// import '../style/commonStyle.css';

// const CustomInput = (props) => {
//   return (
//     <div className={`${props.inputWrapperStyle} input-wrapper`}>
//       <label 
//         className={`${props.labelStyle} label`}
//         htmlFor={props.inputId}
//       >{props.labelText}</label> <br/>
//       <input 
//         className={`${props.inputStyle} input`}
//         type={props.type}
//         autoComplete='off'
//         id={props.inputId}
//         placeholder={props.placeholder}
//         value={props.value}
//         onChange={props.onChange}
//       />
//     </div>
//   )
// }

// export default CustomInput;


import '../style/commonStyle.css';

const CustomInput = (props) => {
  return (
    <div className={`${props.inputWrapperStyle} input-wrapper`}>
      {props.inputType === 'textarea' ? (
        <textarea />
      ) : (
        <>
          <label 
            className={`${props.labelStyle} label`}
            htmlFor={props.inputId}
          >{props.labelText}</label> <br/>
          <input 
            className={`${props.inputStyle} input`}
            type={props.type}
            autoComplete='off'
            id={props.inputId}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
          />
        </>
      )}
    </div>
  )
}

export default CustomInput;