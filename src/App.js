import './App.css';
import {Box, Card} from "@mui/material";
import TipSelector from "./components/TipSelector";
import TipDisplay from "./components/TipDisplay";
import {useCallback, useState} from "react";

function App() {

    const initialTipData = {
        tipAmount: '0.00',
        totalAmount: '0.00',
        amountPerPerson: '0.00',
        tipAmountPerPerson: '0.00', // assuming you want to reset this value as well
    };

    const [tipData, setTipData] = useState(initialTipData);


    const handleTipCalculation = useCallback((calculatedValues) => {
        setTipData({
            tipAmount: calculatedValues.tipAmount,
            totalAmount: calculatedValues.totalAmount,
            amountPerPerson: calculatedValues.amountPerPerson,
            tipAmountPerPerson: calculatedValues.tipAmountPerPerson,
        });
    }, []);

    const handleReset = () => {
        // Reset values to their initial state
        setTipData(initialTipData);
    };

    return (
        <div className="App">
            <Box className="Title"
                 sx={{
                     color: 'hsla(183, 100%, 15%, .7)',
                     fontSize: '24px',
                     whiteSpace: 'pre-line',
                     letterSpacing: '8px',
                 }}
            >
                SPLI
                {'\n'}
                TTER
            </Box>
            <Card className="MainComponent"
                  sx={{
                      marginTop: '80px',
                      marginBottom: '80px',
                      backgroundColor: 'hsl(0, 0%, 100%)',
                      borderRadius: '25px',
                      boxShadow: '10px 15px 20px hsla(172, 67%, 45%, .2)',
                  }}
            >
                <TipSelector handleTipCalculation={handleTipCalculation} />
                <TipDisplay
                    amountPerPerson={tipData.amountPerPerson}
                    tipAmountPerPerson={tipData.tipAmountPerPerson}
                    handleReset={handleReset}
                />
            </Card>
        </div>
    );
}

export default App;
