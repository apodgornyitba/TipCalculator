import * as React from "react";
import {Box, Container, TextField} from "@mui/material";
import {useState} from "react";
import TipButton from "./TipButton";

function TipSelector() {

    const [percentageValue, setPercentageValue] = useState('');
    const [billValue, setBillValue] = useState('');

    const handleBillChange = (event) => {
        const inputValue = event.target.value;

        // Validate if the input is empty or a number
        if (/^\d+$/.test(inputValue) || inputValue === '') {
            setBillValue(inputValue);
        }
    }
    const handlePercentageChange = (event) => {
        const inputValue = event.target.value;

        // Validate if the input is empty or a number within the range of 0 to 100
        if (inputValue === '' || (/^\d+$/.test(inputValue) && inputValue >= 0 && inputValue <= 100)) {
            setPercentageValue(inputValue);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                textAlign: 'left',
                flexDirection: 'column',
                '& p': {
                    color: 'hsl(184, 14%, 56%)',
                },
                '& .MuiInputBase-root': {
                    backgroundColor: 'hsl(189, 41%, 97%)',
                    color: 'hsl(183, 100%, 15%)',
                    font: 'inherit',
                },
                '& .MuiInputBase-input': {
                    textAlign: 'right',
                    padding: '5px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    borderWidth: '0px',
                }
            }}
        >
            <p>Bill</p>
            <TextField
                placeholder="0"
                type="text"
                value={billValue}
                onChange={handleBillChange}
                InputProps={{
                    startAdornment: <span>$</span>,
                }}
            />
            <p>Select Tip %</p>
            <Container
                sx={{
                    display: 'flex',
                    // flexDirection: 'row',
                }}
            >
                <TipButton percentage={5}/>
                <TipButton percentage={10}/>
                <TipButton percentage={15}/>
            </Container>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',

                    '& .MuiInputBase-input': {
                        textAlign: 'right',
                        padding: '10px',
                        marginRight: '5px',
                    },
                }}
            >
                <TipButton percentage={25}/>
                <TipButton percentage={50}/>
                <TextField
                    sx={{
                        maxWidth: '90px',
                        minHeight: '40px',
                    }}
                    placeholder="Custom"
                    type="text" // Use text type for input
                    inputProps={{
                        pattern: '[0-9]*', // Only allow numeric input
                        title: 'Enter a number between 0 and 100', // Error message if pattern doesn't match
                    }}
                    value={percentageValue}
                    onChange={handlePercentageChange}
                />
            </Container>
        </Box>
    );
}

export default TipSelector;