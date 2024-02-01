import "./DropDown.css";

const DropDown = (props) => {
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select onChange={e => props.setInput(e.target.value)} required={props.required} value={props.value}>
        <option value="" disabled>Escolha um time</option>
        {props.itens.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>
  );
};

export default DropDown;
