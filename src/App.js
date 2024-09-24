import React from 'react';
import DirectoresView from './components/directores/DirectoresView'; // Sin destructuración
import GenerosView from './components/generos/GenerosView';
import MediaView from './components/media/MediaView';
import ProductorasView from './components/productoras/ProductorasView';
import TiposView from './components/tipos/TiposView';
import Header from './components/ui/Header';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={GenerosView} />  {/* Ruta principal */}
        <Route path="/generos" component={GenerosView} />
        <Route path="/directores" component={DirectoresView} />
        <Route path="/media" component={MediaView} />
        <Route path="/productoras" component={ProductorasView} />
        <Route path="/tipos" component={TiposView} />
        <Redirect to="/" /> {/* Redirigir a la raíz si no coincide con ninguna ruta */}
      </Switch>
    </Router>
  );
};

export default App;
