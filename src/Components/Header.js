import React from 'react'
import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import { useHistory } from "react-router-dom";
import { CryptoState } from '../CryptoContext';
import AuthModal from './Authentication/AuthModal';
import UserSideBar from './Authentication/UserSideBar';

const useStyles = makeStyles(() =>({
  title: {
      flex: 1,
      color: "gold",
      fontFamily: "Montserat",
      fontWeight: "bold",
      cursor: "pointer",
  },
}))
const Header = () => {

  const classes = useStyles();
  const history = useHistory();

  const { currency, setCurrency, user } = CryptoState();

  console.log(currency);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Typography onClick={() => history.push("/")} className={classes.title} variant="h6">Crypto Pedia</Typography>

          <Select variant='outlined' style={{width: 100, height: 40, marginRight: 15}} 
                  value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
          {user ? <UserSideBar /> : <AuthModal/>}
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header