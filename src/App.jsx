import {useState} from "react";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form/Form";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";

function App() {
	const [teams, setTeams] = useState([
		{
			name: "Programação",
			primaryColor: "#D9F7E9",
			secondaryColor: "#57C278",
		},
		{
			name: "Front-End",
			primaryColor: "#E8F8FF",
			secondaryColor: "#82CFFA",
		},
		{
			name: "Data Science",
			primaryColor: "#F0F8E2",
			secondaryColor: "#A6D157",
		},
		{
			name: "Devops",
			primaryColor: "#FDE7E8",
			secondaryColor: "#E06B69",
		},
		{
			name: "UX e UI",
			primaryColor: "#FAE9F5",
			secondaryColor: "#DB6EBF",
		},
		{
			name: "Mobile",
			primaryColor: "#FFF5D9",
			secondaryColor: "#FFBA05",
		},
		{
			name: "Inovação e gestão",
			primaryColor: "#FFEEDF",
			secondaryColor: "#FF8A29",
		},
	]);

	const [employees, setEmployees] = useState([]);

	const createNewEmploye = (employe) => {
		setEmployees([...employees, employe]);
	};

	const onDelete = () => {
		console.log("colaborador deletado");
	};

	const changeColor = (cor, teamName) => {
		setTeams(
			teams.map((team) => {
				if (team.name === teamName) {
					team.secondaryColor = cor;
				}
				return team;
			})
		);
  }

		return (
			<div className="App">
				<Banner />
				<Form
					teams={teams.map((time) => time.name)}
					onSubmit={(employe) => createNewEmploye(employe)}
				/>
				{teams.map((team) => (
					<Team
						key={team.name}
						name={team.name}
						primaryColor={team.primaryColor}
						secondaryColor={team.secondaryColor}
						employees={employees.filter(
							(employe) => employe.team === team.name
						)}
						onDelete={onDelete}
						changeColor={changeColor}
					/>
				))}
				<Footer />
			</div>
		);
	};


export default App;
