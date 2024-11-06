import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay'
import axios from 'axios'
// import dotenv from 'dotenv'

// dotenv.config()
// const apiKey = import.meta.env.API_KEY

function App() {
  const[movie, setMovie] = useState(null)
  // const apiKey = '116c57cb'
  const apiKey = import.meta.env.VITE_API_KEY

  const getMovie = async(searchTerm)=>{
   try {

    if(searchTerm == ' '){
      let min = 1000000;
      let max = 5000000;

      let randNum = Math.round(Math.random() * (max - min)) + min;
      console.log(randNum);

      let url = `http://www.omdbapi.com/?apikey=${apiKey}&i=tt${randNum}`;
      let res = await axios.get(url)
      setMovie(res.data)

    } else {
      let url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      // const url = `http://www.omdbapi.com/?i=tt3896198&apikey=116c57cb&t=godfather`
      let res = await axios.get(url)
      setMovie(res.data)
    }
    
    

   } catch (error) {
    console.error(error)
   }
  }

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("");
  }, []);
// useEffect(() => {
//     const movies = `http://www.omdbapi.com/?apikey=${apikey}&`
//     const random = Math.floor(Math.random() * movies.length);
//     getMovie(random);
//   }, []);

  return (
    <div className='App'>
      <Form movieSearch={getMovie}/>
      <MovieDisplay movie={movie}/>

    </div>
  )
}

export default App
