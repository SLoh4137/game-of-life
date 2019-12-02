import React from "react";

import {
    FormControl,
    InputLabel,
    Input,
    FormControlLabel,
    TextField,
} from "@material-ui/core";

type Props = {
    label: String,
    option: String,
    dispatch: String,
    actionType: String,
    defaultValue: String,
};

function ChooseColorInput(props: Props) {
    const { label, option, dispatch, actionType, defaultValue } = props;

    const handleChange = event => {
        dispatch({ type: actionType, [option]: event.target.value });
    };

    return (
        // <FormControlLabel
        //     control={
        //         <Input
        //             id={option}
        //             fullWidth
        //             type="color"
        //             onChange={handleChange}
        //             defaultValue={defaultValue}
        //         />
        //     }
        //     label={label}
        //     labelPlacement="top"
        //     variant="outlined"
        // />
        <TextField
            //fullWidth
            id={`outlined-set-color-${option}`}
            label={label}
            type="color"
            InputLabelProps={{
                shrink: true,
            }}
            InputProps={{
                style: {
                    width: "100px"
                }
            }}
            onChange={handleChange}
            defaultValue={defaultValue}
            margin="normal"
            variant="outlined"
        />
        
    );
}

export default ChooseColorInput;