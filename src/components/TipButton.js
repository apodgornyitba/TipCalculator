import * as React from "react";
import {Button} from "@mui/material";


function TipButton(props) {
    const {percentage, isSelected, onClick} = props;

    return (
        <Button
            sx={{
                backgroundColor: 'hsl(183, 100%, 15%)',
                color: 'hsl(189, 41%, 97%)',
                minWidth: '90px',
                maxHeight: '40px',
                borderRadius: '5px',
                margin: '5px',
                '&.MuiButton-root': {
                    font: 'inherit',
                },
                '&.selected': {
                    backgroundColor: 'hsl(172, 67%, 45%)',
                },
                '&:hover': {
                    backgroundColor: 'hsl(172, 67%, 45%)',
                }
            }}
            className={`tip-button ${isSelected ? 'selected' : ''}`}
            onClick={onClick}
        >
            {percentage}%
        </Button>
    );
}
export default TipButton;