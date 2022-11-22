import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';


function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
	</Routes>
	</Router>
);
}



fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log("Error: ", error);
  });



export default App;
