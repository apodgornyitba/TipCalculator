import * as React from "react";
import {useEffect, useState} from "react";
import {Box, TextField} from "@mui/material";
import TipButton from "./TipButton";
import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";

function TipSelector({ handleTipCalculation }) {

    const [percentageValue, setPercentageValue] = useState('');
    const [billValue, setBillValue] = useState('');
    const [peopleValue, setPeopleValue] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [, setIsCustomSelected] = useState(false);
    const [selectedPercentage, setSelectedPercentage] = useState(null);
    const [peopleError, setPeopleError] = useState(null);

    useEffect(() => {
        // Convert percentageValue to a decimal for calculations
        const tipPercentage = selectedPercentage
            ? selectedPercentage / 100
            : percentageValue / 100;

        // Calculate tip, total amount, and amount per person
        const tipAmount = billValue * tipPercentage;
        const totalAmount = parseFloat(billValue) + tipAmount;
        const amountPerPerson = (peopleValue && peopleValue > 0) ? totalAmount / peopleValue : 0;
        const tipAmountPerPerson = (peopleValue && peopleValue > 0) ? tipAmount / peopleValue : 0;

        // Pass the calculated values to the parent component or update state accordingly
        // For simplicity, I assume you have a function handleTipCalculation in your parent component
        // that takes care of updating the TipDisplay component with the calculated values.
        handleTipCalculation({
            amountPerPerson: amountPerPerson.toFixed(2),
            tipAmountPerPerson: tipAmountPerPerson.toFixed(2),
        });
    }, [billValue, selectedPercentage, percentageValue, peopleValue]);

    const handleFocus = () => {
        setIsActive(true);
    };

    const handleBlur = () => {
        setIsActive(false);
    };

    const handleButtonClick = (percentage) => {
        // Check if the Custom TextField is empty before allowing the selection of other buttons
        if (!percentageValue) {
            setSelectedPercentage(percentage === selectedPercentage ? null : percentage);
            setIsCustomSelected(false);
        }
    };

    const handleBillChange = (event) => {
        const inputValue = event.target.value;

        // Validate if the input is empty or a number (including decimals)
        if (/^\d*\.?\d*$/.test(inputValue) || inputValue === '') {
            setBillValue(inputValue);
            setIsCustomSelected(false);
        } else {
            setIsCustomSelected(true);
        }
    }
    const handlePercentageChange = (event) => {
        const inputValue = event.target.value;

        // Validate if the input is empty or a valid number within the range of 0 to 100
        if (inputValue === '' || (/^\d+$/.test(inputValue) && inputValue >= 0 && inputValue <= 100)) {
            setPercentageValue(inputValue);
            setSelectedPercentage(null);
            setIsCustomSelected(true);
        } else {
            setIsCustomSelected(false);
        }
    };

    const handleNumberofPeopleChange = (event) => {
        const inputValue = event.target.value;

        // Validate if the input is a non-zero positive integer
        if (/^[1-9]\d*$/.test(inputValue) || inputValue === '') {
            setPeopleValue(inputValue);
            setPeopleError(false); // Clear any previous error
        } else {
            setPeopleError(true); // Set error to true
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                textAlign: 'left',
                flexDirection: 'column',
                marginRight: '20px',
                marginTop: '-20px',
                '& p': {
                    color: 'hsl(184, 14%, 56%)',
                    marginBottom: '5px',
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
                    borderWidth: isActive ? '2px' : '0px',
                    borderColor: isActive ? 'hsl(172, 67%, 45%)' : 'transparent',
                    padding: isActive ? '10px' : '5px',

                },
            }}
        >
            <Box
                sx={{
                    marginBottom: '30px',
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
            </Box>
            <Box
                sx={{
                    marginBottom: '30px',
                }}
            >
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
                            maxWidth: '100px',
                            minHeight: '40px',
                            '& .MuiInputBase-input': {
                                padding: '5px',
                                textAlign: 'right',
                                marginRight: '5px',
                                fontSize: '20px',
                            },
                        }}
                        placeholder="Custom"
                        type="text"
                        inputProps={{
                            pattern: '[0-9]*',
                            title: 'Enter a number between 0 and 100',
                        }}
                        value={percentageValue}
                        onChange={handlePercentageChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </Box>
            </Box>
            <Box>
                <p>Number of People</p>
                <TextField
                    sx={{
                        '& .MuiInputBase-input': {
                            textAlign: 'right',
                            marginRight: '5px',
                            padding: '5px',
                            fontSize: '24px',
                            borderColor: peopleError ? 'red' : '',
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
                    error={!!peopleError} // Pass the error state to the TextField
                    helperText={peopleError ? 'Can\'t be 0.' : null}
                />
            </Box>
        </Box>
    );
}

export default TipSelector;