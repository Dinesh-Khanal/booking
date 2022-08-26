import React from "react";
import "./explore.css";
const Explore = () => {
  return (
    <div className="explorer">
      <div className="exploreItem">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ef/5d/cb/pashupatinath-kathmandu.jpg?w=600&h=400&s=1"
          alt=""
        />
        <div className="exploreText">
          <h2>Kathmandu</h2>
          <p>928 properties</p>
        </div>
      </div>
      <div className="exploreItem">
        <img
          src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/0a99949f58bc92145369e8363c64c33bfd85f819/big-68acc559aad8def0f326f4d62e8faf78.jpg"
          alt=""
        />
        <div className="exploreText">
          <h2>Pokhara</h2>
          <p>745 properties</p>
        </div>
      </div>
      <div className="exploreItem">
        <img
          src="https://www.hrw.org/sites/default/files/styles/embed_xxl/public/media_2020/07/202007asia_nepal_chitwan.jpg?itok=CDGgEa5j"
          alt=""
        />
        <div className="exploreText">
          <h2>Chitawan</h2>
          <p>228 properties</p>
        </div>
      </div>
      <div className="exploreItem">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/65/06/f7/the-main-maya-devi-temple.jpg?w=500&h=-1&s=1"
          alt=""
        />
        <div className="exploreText">
          <h2>Lumbinit</h2>
          <p>105 properties</p>
        </div>
      </div>
      <div className="exploreItem">
        <img
          src="https://stingynomads.com/wp-content/uploads/2020/03/Everest-Base-Camp-trek-itinerary.jpg"
          alt=""
        />
        <div className="exploreText">
          <h2>Sagarmatha BC</h2>
          <p>28 properties</p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
