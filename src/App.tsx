import React from 'react';
import {Route, Routes} from "react-router-dom";

import FavoritesPage from "./pages/FavoritePage";
import HomePage from "./pages/HomePage";
import Navigation from "./components/navigation";

function App() {
  return (
    <div className="App">
        <Navigation/>
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'favorites'} element={<FavoritesPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
