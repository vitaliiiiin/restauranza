import { createTheme } from "@mui/material";

const defaultTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    fontSize: '1rem',
                    width: 150,
                    height: 50,
                    backgroundColor: '#FF0541',
                    borderRadius: 12,
                    ":hover": {
                        backgroundColor: '#b00000'
                    }
                },
            },
        },
    },
});

export default defaultTheme;