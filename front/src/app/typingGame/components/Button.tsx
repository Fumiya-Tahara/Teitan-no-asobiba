import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = createTheme({
    typography: {
        button: {
            textTransform: 'none',
        },
    },
});

type Props = {
    children: any,
    onClick: () => void,
};

export default function StartButton({ children, onClick }: Props) {
    return (
        <>
        <ThemeProvider theme={styles}>
            <Button onClick={onClick} variant='contained' color='primary'>
                {children}
            </Button>
        </ThemeProvider>
        </>
    );
}
