import * as React from 'react';
import { Box, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';

export function NumberInput({ value, setValue, placeholder = '', min = 0, max = 100 }) {
    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue ? Math.max(min, Math.min(max, Number(newValue))) : '');
    };
    return (
        <Box sx={{display: "flex",
            // flex: 1,
            flexWrap: "wrap",
            alignItems: "center",
            maxHeight: 60,
            maxWidth: "320px",
            textAlign: "left" }}>
        <Box>
            <Typography variant="subtitle1" sx={{ fontSize: 14 }} gutterBottom>
              {placeholder}
            </Typography>
        </Box>

            <TextField
                type="number"
                value={value}
                variant="outlined"
                onChange={handleChange}
                placeholder={placeholder}
                inputProps={{
                    min,
                    max,
                }}
                sx={{
                    width: '305px',
                    '& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button': {
                        opacity: 1,
                        display: 'block'
                    },                    
                }}
            />
        </Box>
    );
}

export default function NumberStepper({placeholder}) {
    const [counter, setCounter] = React.useState(0);

    return <NumberInput value={counter} setValue={setCounter} placeholder={placeholder} />;
}
