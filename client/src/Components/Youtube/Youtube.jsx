import React, { useEffect, useState } from "react";
import "./video.css"


import moment from "moment";
const Youtube = () => {

  // const API_KAY = import.meta.env.VITE_API_KEY;
  const [apiData, setApiData] = useState([])

  useEffect(()=>{
     fetch(
       `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBfg-aqV0pHfg7ee-fvDUc0YIDP-8j_abU&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9`
     )
       .then((response) => response.json())
       .then((data) => {
         console.log(data);

         setApiData(data.items);
       });
  },[])
  return (
    <div>
       <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                Latest Videos
              </div>
            </div>
            {apiData?.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;

              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
             return (
               <div key={i} className="col-sm-12 col-md-4">
                 <div className="singleVideoWrapper">
                   <div className="videoThumbnail">
                     <a href={vidLink} target="_blank">
                       <img src={singleVideo.snippet.thumbnails.high.url} />
                     </a>
                   </div>
                   <div className="videoInfoWrapper">
                     <div className="videoTitle">
                       <a href={vidLink} target="_blank">
                         {singleVideo.snippet.title}
                       </a>
                     </div>
                     <div className="videoDesc">
                       {singleVideo.snippet.description}
                     </div>
                     <div>
                       {moment(singleVideo.snippet.publishedAt).fromNow()}
                     </div>
                   </div>
                 </div>
               </div>
             );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Youtube
