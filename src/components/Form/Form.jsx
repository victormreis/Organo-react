import Button from "../Button/Button";
import DropDown from "../DropDonw/DropDonw";
import Input from "../TextField/Input";
import "./Form.css";

const Form = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e UI",
    "Mobile",
    "Inovação e gestão",
  ];
  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Input
          label="Nome"
          placeholder="Digite o seu nome"
          type="text"
        />
        <Input
          label="Cargo"
          placeholder="Digite o seu cargo"
          type="text"
        />
        <Input
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          type="text"
        />
        <DropDown
          itens={times}
          label="Time"
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
