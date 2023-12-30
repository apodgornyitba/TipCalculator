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
                minWidth: '130px',
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
                    backgroundColor: 'hsl(185, 41%, 84%)',
                    color: 'hsl(183, 100%, 15%)',
                }
            }}
        >
            {percentage}
        </Button>
    );
}
export default TipButton;