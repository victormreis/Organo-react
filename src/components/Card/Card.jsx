import {useState} from "react";
import "./Card.css";

const Card = (props) => {
  const [imageError, setImageError] = useState(false);
  const userImage = "/imagens/user.png";
  const imageURL = imageError ? userImage : props.employe.image;

  const handleImageError = () => {
    setImageError(true);
  }; 
  return (
    <div className="card">
      <div
        className="header"
        style={{backgroundColor: props.backgroundColor}}>
        <img
          src={imageURL}
          onError={handleImageError}
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
