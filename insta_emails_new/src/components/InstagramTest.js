import React from 'react'
import Button from 'react-bootstrap/Button';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import axios from 'axios';
const { IgApiClient } = require('instagram-private-api');

const Instagram = require('instagram-web-api')
const username = "xtest2604"
const password = "Tanner2694"
const ig = new IgApiClient();

async function instagramPhotos (usera) {
  // It will contain our photos' links
  const res = []
  let allResults = []
  usera.forEach(async user => {
    try {
      const userInfoSource = await axios.get(`https://www.instagram.com/${user}/`)

      // userInfoSource.data contains the HTML from Axios
      const jsonObject = userInfoSource.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)

      const userInfo = JSON.parse(jsonObject)
      // Retrieve only the first 10 results
      const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user
      allResults.push(mediaArray);
    } catch (e) {
      console.error('Unable to retrieve photos. Reason: ' + e.toString())
    }
  });
  console.log(allResults)
  // const res = []
  
  // try {
  //     const userInfoSource = await axios.get(`https://www.instagram.com/${usera}/`)

  //     // userInfoSource.data contains the HTML from Axios
  //     const jsonObject = userInfoSource.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)

  //     const userInfo = JSON.parse(jsonObject)
  //     console.log(userInfo)
  //     // Retrieve only the first 10 results
  //     const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 10)
  //     for (let media of mediaArray) {
  //         const node = media.node
          
  //         // Process only if is an image
  //         if ((node.__typename && node.__typename !== 'GraphImage')) {
  //             continue
  //         }

  //         // Push the thumbnail src in the array
  //         res.push(node.thumbnail_src)
  //     }
  // } catch (e) {
  //     console.error('Unable to retrieve photos. Reason: ' + e.toString())
  // }
  
  return allResults
}


export const TestInsta = () => {

  instagramPhotos(["oranapparel","richandclear","balleralert"])
      //const instagram = await client.getUserByUsername({ username: 'jeffcurry26' })


  return (
      <div></div>
  )
}

export default TestInsta;