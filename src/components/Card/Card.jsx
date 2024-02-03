import {useState} from "react";
import "./Card.css";

import { IoIosCloseCircle } from "react-icons/io";

const Card = (props) => {
	const [imageError, setImageError] = useState(false);
	const userImage = "/imagens/user.png";
	const imageURL = imageError ? userImage : props.employe.image;

	const handleImageError = () => {
		setImageError(true);
	};
	return (
		<div className="card">
      <IoIosCloseCircle size={30} color className="delete" onClick={() => props.onDelete(props.id)}/>        
			<div className="header" style={{backgroundColor: props.backgroundColor}}>
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
