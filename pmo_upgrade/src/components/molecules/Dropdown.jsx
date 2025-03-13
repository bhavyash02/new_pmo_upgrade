import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Typography } from "@mui/material";

export function Dropdown({
  input = [], // Ensure default to an empty array if `input` is undefined
  handleOnSelect,
  selectedValues = [],
  placeholder = "", // Default placeholder
  onFocus,
  onBlur,
  disabled,
  ...rest
}) {
  return (
    <Box
      sx={{
        display: "flex",
        // flex: 1,
        flexWrap: "wrap",
        alignItems: "center",
        maxHeight: 60,
        maxWidth: "320px",
        textAlign: "left"
      }}
    >
        <Box>
      <Typography variant="subtitle1" sx={{ fontSize: 14 }} gutterBottom>
        {placeholder}
      </Typography></Box>
      <Autocomplete
        options={input}
        disabled={disabled}
        getOptionLabel={(option) => option.toString() || ""} // Ensure option has title
        onChange={handleOnSelect} // Pass the handler function
        value={selectedValues} // Selected values dynamically passed
        sx={{ width: 305, marginRight: 2, display: "block", }}
        renderInput={(params) => (
          <TextField
            {...params}
            {...rest} // Pass react-hook-form properties here
            placeholder={placeholder}
            onFocus={(event) =>
              (event.target.placeholder = onFocus || placeholder)
            }
            onBlur={(event) =>
              (event.target.placeholder = onBlur || placeholder)
            }
          />
        )}
      />
    </Box>
  );
}

export default Dropdown;
