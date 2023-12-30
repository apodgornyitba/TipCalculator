import * as React from "react";
import {useState} from "react";
import {Box, TextField} from "@mui/material";
import TipButton from "./TipButton";
import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";

function TipSelector() {

    const [percentageValue, setPercentageValue] = useState('');
    const [billValue, setBillValue] = useState('');
    const [peopleValue, setPeopleValue] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [selectedPercentage, setSelectedPercentage] = useState(null);

    const handleFocus = () => {
        setIsActive(true);
    };

    const handleBlur = () => {
        setIsActive(false);
    };

    const handleBillChange = (event) => {
        const inputValue = event.target.value;

        // Validate if the input is empty or a number (including decimals)
        if (/^\d*\.?\d*$/.test(inputValue) || inputValue === '') {
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

    const handleButtonClick = (percentage) => {
        setSelectedPercentage(percentage === selectedPercentage ? null : percentage);
    };

    const handleNumberofPeopleChange = (event) => {
        const inputValue = event.target.value;

        // Validate if the input is empty or a number
        if (/^\d+$/.test(inputValue) || inputValue === '') {
            setPeopleValue(inputValue);
        }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                textAlign: 'left',
                flexDirection: 'column',
                marginRight: '20px',
                marginTop: '-100px',
                '& p': {
                    color: 'hsl(184, 14%, 56%)',
                },
                '& .MuiInputBase-root': {
                    backgroundColor: 'hsl(189, 41%, 97%)',
                    color: 'hsl(183, 100%, 15%)',
                    font: 'inherit',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    borderWidth: '0px',
                },
                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderWidth: isActive ? '2px' : '0px', // Border width changes when active
                    borderColor: isActive ? 'hsl(172, 67%, 45%)' : 'transparent', // Border color changes when active
                    padding: isActive ? '10px' : '5px', // Padding changes when active

                },
            }}
        >
            <p>Bill</p>
            <TextField
                sx={{
                    '& .MuiInputBase-input': {
                        textAlign: 'right',
                        marginRight: '5px',
                        padding: '5px',
                        fontSize: '24px',
                    },
                }}
                placeholder="0"
                type="text"
                value={billValue}
                onChange={handleBillChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                InputProps={{
                    startAdornment: <img alt="Icon of a dollar sign" src={dollar}/>
                }}
            />
            <p>Select Tip %</p>
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                <TipButton
                    percentage={"5%"}
                    isSelected={selectedPercentage === 5}
                    handleClick={() => handleButtonClick(5)}
                />
                <TipButton
                    percentage={"10%"}
                    isSelected={selectedPercentage === 10}
                    handleClick={() => handleButtonClick(10)}
                />
                <TipButton
                    percentage={"15%"}
                    isSelected={selectedPercentage === 15}
                    handleClick={() => handleButtonClick(15)}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <TipButton
                    percentage={"25%"}
                    isSelected={selectedPercentage === 25}
                    handleClick={() => handleButtonClick(25)}
                />
                <TipButton
                    percentage={"50%"}
                    isSelected={selectedPercentage === 50}
                    handleClick={() => handleButtonClick(50)}
                />
                <TextField
                    sx={{
                        marginLeft: '5px',
                        maxWidth: '130px',
                        minHeight: '40px',
                        '& .MuiInputBase-input': {
                            padding: '5px',
                            textAlign: 'right',
                            marginRight: '5px',
                            fontSize: '24px',
                        },
                    }}
                    placeholder="Custom"
                    type="text" // Use text type for input
                    inputProps={{
                        pattern: '[0-9]*', // Only allow numeric input
                        title: 'Enter a number between 0 and 100', // Error message if pattern doesn't match
                    }}
                    value={percentageValue}
                    onChange={handlePercentageChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </Box>
            <p>Number of People</p>
            <TextField
                sx={{
                    '& .MuiInputBase-input': {
                        textAlign: 'right',
                        marginRight: '5px',
                        padding: '5px',
                        fontSize: '24px',
                    },
                }}
                InputProps={{
                    startAdornment: <img alt="Icon of a group of people" src={person}/>
                }}
                placeholder="0"
                type="text"
                value={peopleValue}
                onChange={handleNumberofPeopleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </Box>
    );
}

export default TipSelector;