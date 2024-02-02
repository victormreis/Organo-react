import Card from "../Card/Card";
import "./Team.css";
import Input from '../TextField/Input'

const Team = (props) => {
	return (
		props.employees.length > 0 && (
			<section className="team" style={{backgroundColor: props.primaryColor}}>       
        <input type="color" className="input-color" value={props.secondaryColor} onChange={(event) => props.changeColor(event.target.value, props.name)}/>
				<h3 style={{borderColor: props.secondaryColor}}>{props.name}</h3>
				<div className="cards">
					{props.employees.map((employe) => {
						return (
							<Card
								key={employe.name}
								employe={employe}
								backgroundColor={props.secondaryColor}
								onDelete={props.onDelete}
							/>
						);
					})}
				</div>
			</section>
		)
	);
};

export default Team;
