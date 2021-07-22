import React from 'react'
import axios from 'axios'
import { useState, useEffect, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { ImageSlider } from './ImageSlider'


const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flexbox;
  justify-content: center;
  align-items: center;
`
// background-color: red;
// `

// const axios = require('axios')

// let return1 = async () => {
//   let res = await axios.get('http://webcode.me')
//   let posts = res.data

//     .then((resp) => {
//       console.log("Data:",resp.data)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }

export const Scroller = () => {
  let myurl = process.env.REACT_APP_IG_API_KEY
  let url = 'http://webcode.me'
  let test = 'https://api.github.com/users/iliakan'

  const [imgUrl, setImgUrl] = useState([])
  const [imgUrl2, setImgUrl2] = useState('Empty2')
  const [isLoading, setLoading] = useState(true)
  const [bgImage, setBgImage] = useState()
  const [urlIndex, setUrlIndex] = useState(0)

  const FetchData1 = async () => {
    const result = await axios(myurl)
    console.log('Fetching JSON:', myurl)

    return result
  }

  useEffect(() => {
    // axios
    //   .get(myurl)
    //   // .then((response) => setImgUrl(JSON.stringify(response)))
    //   .then((response) => {

    //     console.log('Hello')
    //     setImgUrl(response.data.data)
    //     // console.log(imgUrl.data.length)
    //     // console.log(imgUrl.data)
    //     // console.log("Finished API Search")

    //       console.log("State of imgUrl:", imgUrl)
    //       console.log(imgUrl[number1])

    //   })

    FetchData1()
      .then((res) => {
        // console.log(res.data)
        // setImgUrl(JSON.stringify(res.data, null, 2))
        // console.log("Fetched Data")
        let JSONdata = res.data
        setImgUrl(res.data)
        setLoading(false)
        // console.log("IG Fetch Length from UseEffect:", imgUrl)

        // console.log(imgUrl[0].media_url)
        // console.log("Fetched Data:", JSONdata);
        // setImgUrl2(imgUrl[0].media_url)
        // console.log(imgUrl[0].id)
      })
      .catch((error) => {
        alert("Failed to reach the Instagram API. Please update the Access Token")
        setImgUrl("E")
        console.log('OH NO - FetchData Error:', error)
      })
    // console.log(imgUrl.length)
    // console.log(imgUrl.data)
    // console.log('Finished API Search')
  }, [])

  // const test2 = () => {
  //   let testCurrentURL = imgUrl[number1].id
  //   console.log("testFunc:", testCurrentURL)
  // }

  // setImgUrl2(imgUrl[number1])
  // console.log("currentURL:", imgUrl2)

  const increaser = () => {
    let length = Object.keys(imgUrl).length
    console.log('Increased')
    console.log('Env Variable:', process.env.REACT_APP_IG_API_KEY)
    if (urlIndex < length) {
      setUrlIndex(urlIndex + 1)
    } else {
      setUrlIndex(0)
    }
    // console.log(imgUrl)
  }

    const decreaser = () => {
      let length = Object.keys(imgUrl).length
      console.log('Increased')
      console.log('Env Variable:', process.env.REACT_APP_IG_API_KEY)
      if (urlIndex <= 0) {
        setUrlIndex(length)
      } else {
        setUrlIndex(urlIndex - 1)
      }
      // console.log(imgUrl)
    }

  let image2 =
    'https://images.unsplash.com/photo-1612174133763-df8b2e782ffa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80'

  const StyledBackground = styled.section`
    /* background-color: ${(props) => props.bg || 'green'}; */
    background-image: url(${(props) => props.img || image2});
    height: 100%;
    width: 100%;
    z-index: -1;
    filter: blur(5px) grayscale(40%);
    position: absolute;
    background-position: center;
    background-size: cover;
    opacity: 1;
    transition: opacity 0.25s ease-in-out;
  `

  const changeBackground = () => {
    let container = document.getElementById('#scrollerContainer')
    let container2 = document.querySelector('#scrollerContainer')

  }

  console.log('Render', typeof imgUrl)

  if (imgUrl === 'E') {
    console.log(imgUrl)
    return <div className="App">Data Retrieving Failed</div>
  } else if (isLoading) {
    return <div className="App">Loading...</div>
  } else {
    console.log(
      'IG Fetch Length from UseEffect:',
      imgUrl['data'][urlIndex]['media_url']
    )
    let bgUrl = imgUrl['data'][urlIndex]['media_url']
    return (
      <>
      <Wrapper>
        <StyledBackground bg="red" img={bgUrl}>

        </StyledBackground>
        <ImageSlider
          SliderImg={bgUrl}
          increase={increaser}
          decrease={decreaser}
          urlIndex={urlIndex}
          setUrlIndex={setUrlIndex}
          imageLengthLimit={Object.keys(imgUrl).length}
        ></ImageSlider>
        </Wrapper>
      </>
    )
  }
}
