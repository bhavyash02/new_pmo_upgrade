import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function NumberInput({ value, setValue, placeholder = 'Type a number...', min = 0, max = 100 }) {
    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue ? Math.max(min, Math.min(max, Number(newValue))) : '');
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
                type="number"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                inputProps={{
                    min,
                    max,
                    style: { textAlign: 'center' },
                }}
                sx={{
                    width: '200px',
                    '& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button': {
                        opacity: 1,
                    },
                }}
            />
        </Box>
    );
}

export default function NumberStepper() {
    const [counter, setCounter] = React.useState(0);

    return <NumberInput value={counter} setValue={setCounter} />;
}
