
import styled from 'styled-components'
import background from "./images/background2.jpg"
// import background2 from './images/background2.jpg'
import error from './images/404.png'
import error2 from './images/4042.png'
import background3 from './images/topAlbum2.jpg'
import background4 from './images/topSong.jpg'



export const Background = styled.body`
background-image: url(${background});
background-size:cover;
background-repeat: no-repeat;
color: pink;
height: 100vh;
width: 100%;
box-sixing: border-box;
 box-shadow:inset  0 0 0 2000px rgba(0, 0, 0, 0.5);
`
export const Background2 = styled.body`
background-image: url(${error});
background-size:cover;
background-position:centre;
background-repeat: no-repeat;
height: 100vh;
width: 100%;
@media (max-width: 600px) {
  background-image: url(${error2});
}
`
export const Background3 = styled.body`
background-image: url(${background3});
background-size:cover;
background-repeat: no-repeat;
height: 50vh;
 box-shadow:inset  0 0 0 2000px rgba(0, 0, 0, 0.5);
@media (max-width: 768px) {
  height: 40vh;
}
@media (max-width: 350px) {
  height: 40vh;
}
`
export const Background4 = styled.body`
background-image: url(${background4});
background-size:cover;
background-repeat: no-repeat;
height: 50vh;
 box-shadow:inset  0 0 0 2000px rgba(0, 0, 0, 0.5);
@media (max-width: 768px) {
  height: 40vh;
}
@media (max-width: 350px) {
  height: 40vh;
}
`
export const NavMenudiv = styled.div`
position: absolute;
right: 80px;
margin-top: 40px;
@media (max-width: 768px) {
    right: 20px;
}
`

export const NavMenu = styled.a`
text-decoration: none;
list-style: none;
border: 1px solid white;
border-radius: 25px;
margin: 10px 10px;
padding: 7px 10px;
color: white;
@media (max-width: 768px) {
    border-radius: 25px;
    margin: 5px 5px;
    padding: 3px 5px;
  }
  @media (max-width: 350px) {
    border-radius: 25px;
    margin: 3px 3px;
    padding: 1px 3px;
  }
`
export const MusicCenter = styled.img`
box-sizing: border-box;
height: 50px;
margin: 0 auto;
`
export const MusicWrite = styled.div`
text-transform: uppercase;
color: white;
font-size: 50px;
letter-spacing:3px;
word-spacing: 3px;
text-align:center;
margin: 10px 30px;
padding-bottom: 10px;
@media (max-width: 768px) {
    padding-top: 50px;
    font-size: 40px;
  }
  @media (max-width: 400px) {
    padding-top: 50px;
    font-size: 30px;
  }
`

export const MusicWrite2 = styled.p`
padding-top: 5px;
position: absolute;
color: white;
margin: 0 auto;
font-size: 25px;
text-align:center;
margin: 0 200px;
@media (max-width: 768px) {
    margin: 20px 50px;
    font-size: 20px;
  }
  @media (max-width: 350px) {
    margin: 20px 30px;
    font-size: 20px;
  }
`

export const MusicWrap = styled.div`
    padding-top:180px;
    text-align:center;
    @media (max-width: 768px) {
        padding-top:100px;
      }
      @media (max-width: 350px) {
        padding-top:50px;
      }
`


export const Content = styled.div`
display: flex;
flex-wrap: wrap;
width:100%;
align-items: stretch;
justify-content: center;
align-content:center;
background-color: #fff;
padding: 0 90px;
@media (max-width: 1200px) {
  padding:0 30px;
}
@media (max-width: 350px) {
  padding:0 30px;
}
`
export const AlbumSearch = styled.div`
margin: 30px 0;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-content:center;
background-color: #fff;
padding: 0 120px;
@media (max-width: 1200px) {
  padding:0 30px;
  justify-content: space-evenly;
}
@media (max-width: 350px) {
  padding:0 30px;
  
}
`
export const ViewLike = styled.div`
display: flex;
justify-content: space-between;
padding-top: 5px;
padding-bottom: 30px;
`

export const ImageInfo = styled.div`
display: flex;
justify-content: flex-start;
// padding-top: 5px;
// padding-bottom: 30px;
`
export const Info = styled.div`
margin-left: 20px;
`
export const Image3 = styled.img`
border-radius: 15px;
height:60px;
margin-top: 10px;
`

export const Preview = styled.p`
color: black;
border: 1px solid black;
padding: 3px 15px;
`
export const Fav = styled.div`
margin-top: 5px;
margin-right: 15px;
font-size: 25px;
cursor: pointer;
`

export const Content2 = styled.div`
margin:20px 90px;
padding: 0 90px;
@media (max-width: 1200px) {
  padding:0 30px;
  margin:20px 20px;
}
@media (max-width: 350px) {
  padding:0 30px;
  margin:20px 20px;
}
`
export const Section = styled.div`
width: 250px;
margin: 10px 30px;
`
export const Heading = styled.h2`
font-size: 35px;

`
export const Image4 = styled.img`
width: 250px;

`
export const Image5 = styled.img`
  display: block;
  // margin-top: 30px:
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  padding-top: 100px;
  @media (min-width: 1200px) {
    width: 20%;
    margin-top: 100px;
  }

`

export const FormSearch = styled.div`
margin-top: 15px;

`
export const SearchButton = styled.button`
border: 1px solid black;
padding: 5px 10px;
font-size:15px;
outline:none;
text-transform: uppercase;
@media (max-width: 400px) {
  padding: 2px 5px;
  font-size:13px;
}
`
export const InputForm = styled.input`
border: 1px solid black;
padding: 5px 10px;
max-width: 400px;
min-width: 150px;
margin: 0 5px;
font-size:15px;
outline:none;
@media (max-width: 400px) {
  padding: 2px 5px;
  font-size:13px;
}

`



export const MusicTitle = styled.p`
    color: #000;
    font-size: 15px;
    font-weight: 400;
    padding: 5px 0;
    `
export const Category = styled.p`
    color: #000;
    padding: 5px 0;

    `
    export const ReleaseDate = styled.p`
    color: #000;
    ont-size: 15px;
    padding: 5px 0;
    `