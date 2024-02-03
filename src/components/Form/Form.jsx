import Button from "../Button/Button";
import DropDown from "../DropDonw/DropDonw";
import Input from "../TextField/Input";
import "./Form.css";
import {useState} from "react";

const Form = (props) => {
	const createNewEmploye = (e) => {
		e.preventDefault();
		const employe = {
			name,
			position,
			image,
			team,
		};
		props.onSubmit(employe);
		resetInputs();
	};

	const resetInputs = () => {
		setName("");
		setPosition("");
		setImage("");
		setTeam("");
	};

	const resetInputsNewTeam = () => {
		setColor("");
		setNewTeam("");
	};

	const [name, setName] = useState("");
	const [position, setPosition] = useState("");
	const [image, setImage] = useState("");
	const [team, setTeam] = useState("");
	const [color, setColor] = useState("");
	const [newTeam, setNewTeam] = useState("");

	return (
		<section className="form">
			<form onSubmit={createNewEmploye}>
				<h2>Preencha os dados para criar o card do colaborador</h2>
				<Input
					label="Nome"
					placeholder="Digite o seu nome"
					required
					value={name}
					setInput={(value) => setName(value)}
					type="text"
				/>
				<Input
					label="Cargo"
					placeholder="Digite o seu cargo"
					required
					value={position}
					setInput={(value) => setPosition(value)}
					type="text"
				/>
				<Input
					label="Imagem"
					placeholder="Digite o endereço da imagem"
					value={image}
					setInput={(value) => setImage(value)}
					type="text"
				/>
				<DropDown
					itens={props.teams}
					label="Time"
					required
					value={team}
					setInput={(value) => setTeam(value)}
				/>
				<Button>Criar card</Button>
			</form>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					props.createNewTeam({name: newTeam, cor: color});
					resetInputsNewTeam();
				}}
			>
				<h2>Preencha os dados para criar um novo time</h2>
				<Input
					label="Nome do time"
					placeholder="Digite o nome do time"
					required
					value={newTeam}
					setInput={(value) => setNewTeam(value)}
					type="text"
				/>
				<Input
					label="Cor do time"
					placeholder="Digite a cor do time"
					required
					value={color}
					setInput={(value) => setColor(value)}
					type="color"
				/>
				<Button>Criar time</Button>
			</form>
		</section>
	);
};

export default Form;
