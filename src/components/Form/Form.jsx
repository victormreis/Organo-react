import Button from "../Button/Button";
import DropDown from "../DropDonw/DropDonw";
import Input from "../TextField/Input";
import "./Form.css";

import {useState} from "react";

const Form = (props) => {
  const handleSubmit = (e) => {
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

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Input
          label="Nome"
          placeholder="Digite o seu nome"
          required={true}
          value={name}
          setInput={(value) => setName(value)}
          type="text"
        />
        <Input
          label="Cargo"
          placeholder="Digite o seu cargo"
          required={true}
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
          required={true}
          value={team}
          setInput={(value) => setTeam(value)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
