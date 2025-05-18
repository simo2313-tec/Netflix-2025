import React from 'react'
import Row from '../../../../src/Components/Rows/Row/Row'
import requests from '../../../utils/requests'
import './RowList'

const RowList = ()=> {
  return (
    <>
    <div className='app'>
      <Row
      title="NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true} 
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
       <Row title="Top Rate Movies" fetchUrl={requests.fetchTopRatemovies}/>
       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
       <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
       <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
       <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
       <Row title="Music" fetchUrl={requests.fetchMusic}/>
        <Row title="Adventure" fetchUrl={requests.fetchAdventure}/>
      </div>
    </>
  )
}

export default RowList
