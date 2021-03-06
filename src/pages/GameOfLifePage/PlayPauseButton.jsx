import React from "react";

import { ACTIONS } from "hooks/useOptions";

import Fab from "@material-ui/core/Fab";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

type Props = {
    className: String,
    isPaused: Boolean,
    dispatch: Object,
};

function PlayPauseButton(props: Props) {
    const { className, isPaused, dispatch } = props;
    return (
        <div className={className}>
            <Fab
                size="small"
                onClick={() => dispatch({ type: ACTIONS.PLAYPAUSE })}
            >
                {isPaused ? <PlayArrowIcon /> : <PauseIcon />}
            </Fab>
        </div>
    );
}

export default PlayPauseButton;
