
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header';
import { makeStyles } from '@material-ui/core/styles';
import Alert from './Components/Alert';
import './App.css';
import { lazy, Suspense } from 'react';

const Homepage = lazy(() => import("./Pages/HomePage"));
const CoinPage = lazy(() => import("./Pages/CoinPage"));

function App() {

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: '100vh',

    },
  }));

  const classes = useStyles();

  return (
    
      <BrowserRouter>
      <div className={classes.App}>
       <Header/>
       <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" component={Homepage} exact />
          <Route path="/coins/:id" component={CoinPage} exact />
      </Suspense>
      </div>
        <Alert/>
      </BrowserRouter>
   
  );
}

export default App;
