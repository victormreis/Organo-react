import './Input.css'

const Input = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} type={props.type} />
    </div>
   );
}
 
export default Input;