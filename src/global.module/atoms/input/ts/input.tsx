import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import React from "react";
import Input from './input';

export default (props: any) => {
    const [passShown, setPassShown] = React.useState(true);
    return ( 
        <Input 
            type={passShown ? 'text' : 'password'} 
            endAdornment = {
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setPassShown(!passShown)}
                    >
                        {!passShown ? "iconComponent" : "IconCompontent"}
                    </IconButton>
                </InputAdornment>
            }
            {...props}
        />);
};
