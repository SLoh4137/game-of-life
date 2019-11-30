import React from "react";

import { FormControl, InputLabel, Input } from "@material-ui/core";

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
        <FormControl style={{width: "80%"}} variant="outlined" margin="normal">
            <InputLabel align="center" htmlFor={option}>
                {label}
            </InputLabel>
            <Input
                id={option}
                type="color"
                onChange={handleChange}
                defaultValue={defaultValue}
            />
        </FormControl>
    );
}

export default ChooseColorInput;
