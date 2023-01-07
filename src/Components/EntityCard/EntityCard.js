import React from 'react';
import './EntityCard.css';
function EntityCard() {
  return (
    <div className="card-container">
      <div>
        <h6 style={{color: "blue"}}>Company Name</h6>
        <p>CODE</p>
      </div>
      <div className='users'>
        <p>8 Entities</p>
        <p>64 Users</p>
      </div>
    </div>
  );
}

export default EntityCard
