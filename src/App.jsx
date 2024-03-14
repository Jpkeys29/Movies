import { useState } from 'react'
import NavBar from './NavBar.jsx';
import MainContent from './MainContent.jsx';

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function App() {
  return (
    <>
    <NavBar />
    <MainContent />  
    </>
  );
}


export default App



