import React, {useState, useEffect} from 'react'
import axios from 'axios'
import  {Content2, Background4, Image3, MusicTitle, Category, AlbumSearch, Heading, FormSearch, InputForm, ViewLike, Preview, ImageInfo, Info, Image5} from "./styling"
import './index.css'
import {Favourite} from './topAlbum';
import {  FaPlay } from "react-icons/fa";
import Loader from './images/loading.gif'

function TopSong() {
   const [topAlbum, setTopAlbum] = useState([])
   const [search, setSearch] = useState('')
   const [loading, setLoading] = useState(true);

   useEffect(() => {
    axios
    .get('https://itunes.apple.com/us/rss/topsongs/limit=100/json')
    .then(res => {
     let api = res.data.feed.entry;

          setTopAlbum(api)
          setLoading(false)
        })
    .catch (error => {
        console.error(error);
      })
    },[])
 
    if (loading){
      return <Image5 src={Loader} alt="" />
  } 

  return (
    <div >
      <Background4> </Background4>
      {loading}
      <AlbumSearch>
      <Heading className="writeup2">Top 100 Songs</Heading>
      <FormSearch> 
        <InputForm className="writeup2" type='text' placeholder='Search TopSongs' value={search} onChange={(e)=> setSearch(e.target.value)}/>


      </FormSearch>
      </AlbumSearch>

   {
     topAlbum.filter((item)=>{
      
      const title = item['im:name'].label
      const artist = item['im:artist'].label
      const musicLabel = item.category.attributes.label

      if (search === ""){
        return item
      }
      
      
      else if ((artist.toLowerCase().includes(search.toLowerCase()))||(title.toLowerCase().includes(search.toLowerCase())) ||(musicLabel.toLowerCase().includes(search.toLowerCase()))){
        return item
      }
      
     })
     .map((item)=>{
      const id = item.id.attributes['im:id']
      const label = item.id.label
     const musicLabel = item.category.attributes.term
      const title = item['im:name'].label
      const artist = item['im:artist'].label
      const image = item['im:image']['0'].label
      return <Content2 key={id}> 
            <ImageInfo>
             <Image3 src={image} alt="" /> 
             <Info>
             <MusicTitle className='musicTitle'> Song Title:  {title} </MusicTitle>
            <MusicTitle className='musicTitle'> Artist:  {artist} </MusicTitle>
            <Category className='musicTitle'> Category: {musicLabel} </Category>
            </Info>
            </ImageInfo>

             <ViewLike> <Preview> <a href={label} target="_blank" className="preview" without rel="noreferrer"> <FaPlay /> Preview  </a></Preview>
            <Favourite />
            </ViewLike>
             <hr/>
        </Content2>
   })
   }
    </div>
  );
}

export default TopSong;
