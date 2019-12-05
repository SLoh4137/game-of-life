import React from "react";

import { TextField } from "@material-ui/core";

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
                    width: "150px",
                },
            }}
            onChange={handleChange}
            defaultValue={defaultValue}
            margin="normal"
            variant="outlined"
        />
    );
}

export default ChooseColorInput;
