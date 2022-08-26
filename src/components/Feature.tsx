import React from "react";
import "./feature.css";

const Feature = () => {
  return (
    <div className="feature">
      <div className="featureItem">
        <img
          src="https://res.klook.com/image/upload/c_crop,w_5642,h_3129,x_0,y_91/w_1125,h_624/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/destination/kly6fp7lke0bjzphiqhy.jpg"
          alt=""
        />
        <div className="featureTitle">Kuala Lumpur</div>
      </div>
      <div className="featureItem">
        <img
          src="https://i.guim.co.uk/img/media/f399717f6fb80a54f8c8e8191e5ae94c8f2c80fc/0_100_3487_2092/master/3487.jpg?width=1300&quality=85&fit=max&s=f1785b780940a2a0f4f8f0688c823028"
          alt=""
        />
        <div className="featureTitle">Kathmandu</div>
      </div>
      <div className="featureItem">
        <img
          src="https://www.holidify.com/images/bgImages/BANGKOK%20.jpg"
          alt=""
        />
        <div className="featureTitle">Bangkok</div>
      </div>
    </div>
  );
};

export default Feature;
