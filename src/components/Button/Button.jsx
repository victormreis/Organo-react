import "./Button.css"

const Button = ({children}) => {
  return ( 
    <div className="button">
      <button>{children}</button>
    </div>
   );
}
 
export default Button;