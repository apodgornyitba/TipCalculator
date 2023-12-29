import './App.css';
import {Box, Card} from "@mui/material";
import TipSelector from "./components/TipSelector";

function App() {

    return (
        <div className="App">
            <Box className="Title"
                 sx={{
                     color: 'hsl(186, 14%, 43%)',
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
                      backgroundColor: 'hsl(0, 0%, 100%)',
                      borderRadius: '25px',
                      boxShadow: '10px 15px 20px hsla(172, 67%, 45%, .2)',
                  }}
            >
                <TipSelector/>
            </Card>
        </div>
    );
}

export default App;
