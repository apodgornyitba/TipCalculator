import './App.css';
import {Box, Card} from "@mui/material";
import TipSelector from "./components/TipSelector";
import TipDisplay from "./components/TipDisplay";

function App() {

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
                <TipSelector/>
                <TipDisplay/>
            </Card>
        </div>
    );
}

export default App;
