import "./Input.css";

const Input = (props) => {
	// Função não necessaria uma vez que está sendo passado direto pelo evento onchange o e.targe.value
	// const handleOnChange = e => {
	//   props.setInput(e.target.value);
	// };
	return (
		<div className="campo-texto">
			<label>{props.label}</label>
			<input
				onChange={(e) => props.setInput(e.target.value)}
				required={props.required}
				placeholder={props.placeholder}
				value={props.value}
				type={props.type}
			/>
		</div>
	);
};
export default Input;
