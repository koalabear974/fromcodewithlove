import React, { useEffect, useRef } from 'react';
import Instafeed from 'instafeed.js';
import '../styles/InstagramFeed.css';

const InstagramPost = () => {
  return (
    `<div class="InstagramFeed__post w-64">
      <a href="{{link}}" class="" target="_blank">
<!--        {{caption}}<br><br>-->
        <img title="{{caption}}" src="{{image}}" />
      </a>
    </div>`
  );
}
;
const InstagramFeed = () => {
  const feedRef = useRef()

  useEffect(() => {
    console.log(feedRef.current.innerHTML.length);
    if (feedRef.current.innerHTML.length === 0) {
      var feed = new Instafeed({
        accessToken: 'IGQWRQb29WRVhXbFMwdmFJdV9ValQzYy0wekJlRFB0WEFPNi1uYllkc0R3S19XcmgzVVNCWTJnMVNqa0FRX0N6T2lBUGRSX0MtWlUycF84Y2ZAnWHFfLXI4SVp2bjB4VHFyUlc0UkxZATFRhOTZACYnhvUEJxSlZAxYlEZD',
        target: 'instagramFeedContainer',
        template: InstagramPost(),
      });
      feed.run();
      console.log("RUNNNNNNNN");
    }
  }, [feedRef]);

  return (
    <div ref={feedRef} id="instagramFeedContainer" className="InstagramFeed flex flex-wrap w-full grid grid-cols-3 gap-4">
    </div>
  );
};

export default InstagramFeed;
