import React from 'react';
import '../CommonTemplate.css';
import SlideBar from '../../Components/SlideBar/SideBar';
import PlacesBar from '../../Components/PlacesBar/PlacesBar';

function MyReservations() {
  return (
    <div className="Common">
      <div className="CommonGlass">
        <SlideBar />
        <div className="MainDash">
          <PlacesBar />
          <h3
            style={{
              paddingLeft: '20px',
              color: 'orange',
              background: 'grey',
            }}
          >
            My reservations in New CC
          </h3>
        </div>
      </div>
    </div>
  );
}

export default MyReservations;