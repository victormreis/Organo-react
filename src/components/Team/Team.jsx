import Card from "../Card/Card";
import "./Team.css";
import hexToRgba from "hex-to-rgba";

const Team = (props) => {
	return (
		props.employees.length > 0 && (
			<section
				className="team"
				style={{backgroundColor: hexToRgba(props.cor, "0.37")}}
			>
				<input
					type="color"
					className="input-color"
					value={props.cor}
					onChange={(event) => props.changeColor(event.target.value, props.id)}
				/>
				<h3 style={{borderColor: props.cor}}>{props.name}</h3>
				<div className="cards">
					{props.employees.map((employe) => {
						return (
							<Card
								key={employe.id}
								employe={employe}
								backgroundColor={props.cor}
								onDelete={props.onDelete}
								id={employe.id}
							/>
						);
					})}
				</div>
			</section>
		)
	);
};

export default Team;
