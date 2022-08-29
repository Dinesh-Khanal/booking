import React from "react";
import "./SearchResult.css";

interface IProps {
  destination: string;
}
const SearchResult = ({ destination }: IProps) => {
  return (
    <div className="SearchResult">
      <div className="SrHeader">
        <h2>{destination}: Search Result</h2>
        <button>Show on map</button>
      </div>
      <table className="SrTable">
        <tbody>
          <tr>
            <td>Out top picks</td>
            <td>Homes and apartments first</td>
            <td>Starts highest first</td>
            <td>Starts lowest first</td>
            <td>Distance from downtown</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
      <div className="SrElement">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/207081125.jpg?k=ea0e49fc957139f32e068fcf99dcd17f41d2d0d2e4df33512d29d07dadec1cff&o=&hp=1"
          alt=""
        />
        <div className="SrElementDesc">
          <h2>Mountain Glory Forest Resort</h2>
          <p>
            <a href="http://mountaig.com">Pokhara</a> .{" "}
            <a href="http://mountain.com">Show on map</a> . 5.9 km from center
          </p>
          <p>
            Located in Pokhara, 6 miles from Fewa Lake, Mountain Glory Forest
            Resort provides accommodations with a restaurant, free private
            parking, a seasonal outdoor swimming pool and a fitness center.
          </p>
        </div>
        <div className="SrElementReaction">
          <div className="SrerItem">
            <div className="SrerStatus">
              <h3>Wonderful</h3>
              <p>153 reviews</p>
            </div>
            <div className="SrerRating">9.3</div>
          </div>
          <button>Show Price</button>
        </div>
      </div>
      <div className="SrElement">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/207081125.jpg?k=ea0e49fc957139f32e068fcf99dcd17f41d2d0d2e4df33512d29d07dadec1cff&o=&hp=1"
          alt=""
        />
        <div className="SrElementDesc">
          <h2>Mountain Glory Forest Resort</h2>
          <p>
            <a href="http://mountaig.com">Pokhara</a> .{" "}
            <a href="http://mountain.com">Show on map</a> . 5.9 km from center
          </p>
          <p>
            Located in Pokhara, 6 miles from Fewa Lake, Mountain Glory Forest
            Resort provides accommodations with a restaurant, free private
            parking, a seasonal outdoor swimming pool and a fitness center.
          </p>
        </div>
        <div className="SrElementReaction">
          <div className="SrerItem">
            <div className="SrerStatus">
              <h3>Wonderful</h3>
              <p>153 reviews</p>
            </div>
            <div className="SrerRating">9.3</div>
          </div>
          <button>Show Price</button>
        </div>
      </div>
      <div className="SrElement">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/207081125.jpg?k=ea0e49fc957139f32e068fcf99dcd17f41d2d0d2e4df33512d29d07dadec1cff&o=&hp=1"
          alt=""
        />
        <div className="SrElementDesc">
          <h2>Mountain Glory Forest Resort</h2>
          <p>
            <a href="http://mountaig.com">Pokhara</a> .{" "}
            <a href="http://mountain.com">Show on map</a> . 5.9 km from center
          </p>
          <p>
            Located in Pokhara, 6 miles from Fewa Lake, Mountain Glory Forest
            Resort provides accommodations with a restaurant, free private
            parking, a seasonal outdoor swimming pool and a fitness center.
          </p>
        </div>
        <div className="SrElementReaction">
          <div className="SrerItem">
            <div className="SrerStatus">
              <h3>Wonderful</h3>
              <p>153 reviews</p>
            </div>
            <div className="SrerRating">9.3</div>
          </div>
          <button>Show Price</button>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
