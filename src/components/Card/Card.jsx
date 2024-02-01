import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="header">
        <img
          src={props.employe.image}
          alt={`Foto do ${props.employe.name}`}
        />
      </div>
      <div className="footer">
        <h4>{props.employe.name}</h4>
        <h5>{props.employe.position}</h5>
      </div>
    </div>
  );
};

export default Card;
