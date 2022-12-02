import { Button } from "@mui/material";


function Button(props){
    return( 
    <div className="form">
      <Button 
        onClick={props.onClick}
        label={props.label}

      />
    </div>
      );
  }
   
  export default Button;