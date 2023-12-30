import * as React from "react";
import {Box, Button, Card} from "@mui/material";
import TipButton from "./TipButton";

function TipDisplay(props) {
    const {tipAmount, numberOfPeople, totalAmount, tipPercentage} = props;

    return (
        <Card
            sx={{
                backgroundColor: 'hsl(183, 100%, 15%)',
                paddingLeft: '20px',
                marginLeft: '20px',
                marginBottom: '100px',
                marginTop: '100px',
                textAlign: 'left',

            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: 'white',
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
                        marginLeft: '60px',
                        fontSize: '48px',
                        color: 'hsl(172, 67%, 45%)',
                    }}
                >
                    ${tipAmount}
                </p>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: 'white',
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
                    ${totalAmount}
                </p>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center', // Center the content horizontally
                    paddingLeft: '-20px',
                    marginLeft: '-20px',
                }}
            >

                <Button
                    sx={{
                        backgroundColor: 'hsla(172, 67%, 45%, .2)',
                        color: 'hsl(183, 100%, 15%)',
                        borderRadius: '5px',
                        margin: '5px',
                        '&.MuiButton-root': {
                            font: 'inherit',
                        },
                        '&.selected': {
                            backgroundColor: 'hsl(172, 67%, 45%)',
                        },
                        '&:hover': {
                            backgroundColor: 'hsl(185, 41%, 84%)',
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