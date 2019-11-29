import React from "react";

import Fab from "@material-ui/core/Fab";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

type Props = {
    className: String,
    isPaused: Boolean,
    setIsPaused: Function,
};

function PlayPauseButton(props: Props) {
    const { className, isPaused, setIsPaused } = props;
    return (
        <Fab
            className={className}
            size="small"
            onClick={() => setIsPaused(!isPaused)}
        >
            {isPaused ? <PlayArrowIcon /> : <PauseIcon />}
        </Fab>
    );
}

export default PlayPauseButton;
