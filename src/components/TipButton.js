import * as React from "react";
import {Button} from "@mui/material";


function TipButton(props) {
    const { percentage, isSelected, handleClick } = props;

    return (
        <Button
            onClick={handleClick}
            className={isSelected ? 'selected' : ''}
            sx={{
                backgroundColor: 'hsl(183, 100%, 15%)',
                color: 'hsl(189, 41%, 97%)',
                minWidth: '100px',
                maxHeight: '40px',
                borderRadius: '5px',
                margin: '5px',
                '&.MuiButton-root': {
                    font: 'inherit',
                    fontSize: '24px',
                },
                '&.selected': {
                    backgroundColor: 'hsl(172, 67%, 45%)',
                    color: 'hsl(183, 100%, 15%)',
                },
                '&:hover': {
                    backgroundColor: 'hsla(172, 67%, 45%, .5)',
                    color: 'hsl(183, 100%, 15%)',
                }
            }}
        >
            {percentage}
        </Button>
    );
}
export default TipButton;