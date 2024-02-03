import Banner from "./components/Banner/Banner";
import Form from "./components/Form/Form";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";

import {useState} from "react";
import {v4 as uuidv4} from "uuid";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const [teams, setTeams] = useState([
		{
			id: uuidv4(),
			name: "Front-end",
			cor: "#82CFFA",
		},
		{
			id: uuidv4(),
			name: "Programação",
			cor: "#57C278",
		},
		{
			id: uuidv4(),
			name: "Data Science",
			cor: "#A6D157",
		},
		{
			id: uuidv4(),
			name: "Devops",
			cor: "#E06B69",
		},
		{
			id: uuidv4(),
			name: "UX e UI",
			cor: "#DB6EBF",
		},
		{
			id: uuidv4(),
			name: "Mobile",
			cor: "#FFBA05",
		},
		{
			id: uuidv4(),
			name: "Inovação e gestão",
			cor: "#FF8A29",
		},
	]);

	const initial = [
		{
			id: uuidv4(),
      liked: false,
			name: "VICTOR MARTINS DOS REIS",
			position: "Desenvolvedor de software",
			image: "https://github.com/victormreis.png",
			team: teams[0].name,
		},	
		{
			id: uuidv4(),
      liked: false,
			name: "PAULO SILVEIRA",
			position: "Hipster e CEO da Alura",
			image:
				"https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
			team: teams[2].name,
		},
		{
			id: uuidv4(),
      liked: false,
			name: "JULIANA AMOASEI",
			position: "Desenvolvedora de software e instrutora",
			image:
				"https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
			team: teams[1].name,
		},
		{
			id: uuidv4(),
      liked: false,
			name: "GUSTAVO GUANABARA",
			position: "Engenheiro de Software e instrutor",
			image:
				"https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
			team: teams[2].name,
		},
		{
			id: uuidv4(),
      liked: false,
			name: "GUSTAVO LIMA",
			position: "Desenvolvedor Python e JavaScript na Alura",
			image:
				"	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
			team: teams[1].name,
		},	
		{
			id: uuidv4(),
      liked: true,
			name: "DAIANE SILVA",
			position: "Desenvolvedora de software e instrutora de criancinhas",
			image:
				"https://media.licdn.com/dms/image/C4E03AQEg3Fmx-4zqFg/profile-displayphoto-shrink_800_800/0/1642886144259?e=1712188800&v=beta&t=JiZCMxGgma5QWI4WP6rNgouUjynpN4u2IQ8wt7R824I",
			team: teams[0].name,
		},
	];

	const [employees, setEmployees] = useState(initial);

	const createNewEmploye = (employe) => {
		setEmployees([...employees, {...employe, id: uuidv4()}]);
    toaster('Colaborador adicionado!')
	};

	const onDelete = (id) => {
		setEmployees(employees.filter((employe) => employe.id !== id));
    toaster('Colaborador Excluido!')
	};

	const changeColor = (cor, id) => {
		setTeams(
			teams.map((team) => {
				if (team.id === id) {
					team.cor = cor;
				}
				return team;
			})
		);
	};

  const clickedLike = (id) => {
    setEmployees(employees.map((employe) => {
      if(employe.id === id){
        employe.liked = !employe.liked
      }
      return employe
    }))
  }   

  const toaster = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",      
      });
  }
  

	const createNewTeam = (newTeam) => {
		setTeams([...teams, {...newTeam, id: uuidv4()}]);
    toaster('Time cadastrado com sucesso!')
	};

	return (
		<div className="App">
			<Banner />
			<Form
				teams={teams.map((team) => team.name)}
				onSubmit={(employe) => createNewEmploye(employe)}
				createNewTeam={createNewTeam}
			/>
      <ToastContainer />
			{teams.map((team, index) => (
				<Team
					key={team.index}
					name={team.name}
					cor={team.cor}
					id={team.id}
					employees={employees.filter((employe) => employe.team === team.name)}
					onDelete={onDelete}
					changeColor={changeColor}
          clickedLike={clickedLike}
				/>
			))}
			<Footer />
		</div>
	);
}

export default App;
