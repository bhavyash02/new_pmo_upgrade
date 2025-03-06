import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

export function Dropdown({
    input = [], // Ensure default to an empty array if `input` is undefined
    handleOnSelect,
    selectedValues = [],
    placeholder = 'Select...', // Default placeholder
    onFocus,
    onBlur,
    disabled,
    ...rest
}) {

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', maxHeight: 60 }}>
            <Autocomplete
                options={input}
                disabled={disabled}
                getOptionLabel={(option) => option.toString() || ''} // Ensure option has title
                onChange={handleOnSelect} // Pass the handler function
                value={selectedValues} // Selected values dynamically passed
                sx={{ width: 400, marginRight: 2 }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        {...rest} // Pass react-hook-form properties here
                        placeholder={placeholder}
                        onFocus={(event) => event.target.placeholder = onFocus || placeholder}
                        onBlur={(event) => event.target.placeholder = onBlur || placeholder}
                    />
                )}
            />
        </Box>
    );
}

export default Dropdown;