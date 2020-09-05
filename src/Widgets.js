import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Trending</h2>

        <TwitterTweetEmbed tweetId={"1299614695901425665"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="afridi_rahman97"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome, Twitter Clone Complete, hail #cleverprogrammer", via: "afridi_rahman97" }}
        />
      </div>
    </div>
  );
}

export default Widgets;