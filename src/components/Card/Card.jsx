import {useState} from "react";
import "./Card.css";

import {IoIosCloseCircle} from "react-icons/io";
import {FaHeart, FaRegHeart} from "react-icons/fa";

const Card = (props) => {
	const [imageError, setImageError] = useState(false);
	const userImage = "/imagens/user.png";
	const imageURL = imageError ? userImage : props.employe.image;

	const handleImageError = () => {
		setImageError(true);
	};

	const handleClickLike = () => {
		props.clickedLike(props.employe.id);
	};

  const propsHeartIcon = {
    size: 25,
    onClick: handleClickLike
  }

	return (
		<div className="card">
			<IoIosCloseCircle
				size={30}
				color
				className="delete"
				onClick={() => props.onDelete(props.id)}
			/>
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
				<div className="liked">
					{props.employe.liked ? (
						<FaHeart {...propsHeartIcon} color="#FF0000" />
					) : (
						<FaRegHeart {...propsHeartIcon} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Card;
