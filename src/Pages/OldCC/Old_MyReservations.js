import React from 'react';
import '../CommonTemplate.css';
import Old_SlideBar from '../../Components/SlideBar/Old_SideBar';
import PlacesBar from '../../Components/PlacesBar/PlacesBar';

function MyReservations() {
  return (
    <div className="Common">
      <div className="CommonGlass">
        <Old_SlideBar />
        <div className="MainDash">
          <PlacesBar />
          <h3
            style={{
              paddingLeft: '20px',
              color: 'orange',
              background: 'grey',
            }}
          >
            My reservations in OLD CC
          </h3>
        </div>
      </div>
    </div>
  );
}

export default MyReservations;