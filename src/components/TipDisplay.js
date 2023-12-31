import * as React from "react";
import {Box, Button, Card} from "@mui/material";

function TipDisplay(props) {
    const {amountPerPerson, tipAmountPerPerson, handleReset} = props;

    const handleResetClick = () => {
        // Call the handleReset function passed as a prop to reset values
        handleReset();
    };

    return (
        <Card
            sx={{
                backgroundColor: 'hsl(183, 100%, 15%)',
                width: '300px',
                height: '415px',
                borderRadius: '20px',
                paddingLeft: '40px',
                paddingRight: '40px',
                marginLeft: '40px',
                marginBottom: '40px',
                marginTop: '40px',
                textAlign: 'left',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'white',
                    maxHeight: '100px',
                    marginTop: '20px',
                }}
            >
                <div>
                    <p style={{
                        color: 'white',
                    }}
                    >Tip Amount</p>
                    <p style={{
                        color: 'hsl(186, 14%, 43%)',
                        marginTop: '-15px',
                        fontSize: '12px',
                    }}
                    >/ person</p>
                </div>
                <p
                    style={{
                        fontSize: '48px',
                        color: 'hsl(172, 67%, 45%)',
                    }}
                >
                    ${tipAmountPerPerson}
                </p>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'white',
                    maxHeight: '100px',
                }}
            >
                <div>
                    <p style={{
                        color: 'white',
                    }}
                    >Total</p>
                    <p style={{
                        color: 'hsl(186, 14%, 43%)',
                        marginTop: '-15px',
                        fontSize: '12px',
                    }}
                    >/ person</p>
                </div>
                <p
                    style={{
                        fontSize: '48px',
                        color: 'hsl(172, 67%, 45%)',
                    }}
                >
                    ${amountPerPerson}
                </p>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center', // Center the content horizontally
                    marginLeft: '-20px',
                    marginBottom: '40px',
                    marginTop: '120px',
                }}
            >

                <Button
                    onClick={handleResetClick}
                    sx={{
                        backgroundColor: 'hsla(172, 67%, 45%, .2)',
                        color: 'hsl(183, 100%, 15%)',
                        borderRadius: '5px',
                        minHeight: '40px',
                        marginLeft: '20px',
                        flex: '1', // Make the button stretch the full length
                        '&.MuiButton-root': {
                            font: 'inherit',
                        },
                        '&:hover': {
                            backgroundColor: 'hsl(172, 67%, 45%)',
                        }
                    }}
                >
                    RESET
                </Button>
            </Box>
        </Card>
    );
}

export default TipDisplay;