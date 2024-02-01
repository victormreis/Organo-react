import Card from "../Card/Card";
import "./Team.css";

const Team = (props) => {
  return (
    props.employees.length > 0 && (
      <section
        className="team"
        style={{backgroundColor: props.primaryColor}}>
        <h3 style={{borderColor: props.secondaryColor}}>{props.name}</h3>
        <div className="cards">
          {props.employees.map((employe) => (
            <Card employe={employe} />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
