import React from "react";

import VideoContent from "../../../assets/video/video-content.mp4";
import "./BannerVideo.css";

function BannerVideo({ header, classHeaderBanner }) {
  return (
    <>
      <div className="bannerVideo">
        <video
          className="bannerVideo__video"
          width="100%"
          height="100%"
          loop
          autoPlay
          muted
          playsInline
        >
          <source src={VideoContent} type="video/mp4" />
        </video>
        <div className={"bannerVideo__wrapper"}>
          <h1 className={`bannerVideo__header ${classHeaderBanner}`}>
            {header}
          </h1>
          <p className={"bannerVideo__txt"}>
            Повышайте эффективность и увеличивайте прибыль бизнеса выгодно!
          </p>
        </div>
      </div>
    </>
  );
}

export default BannerVideo;
