import React from 'react'
import './Crossing.css'
import { FaPhoneAlt } from 'react-icons/fa'

const RecentCrossing = () => {
  return (
    <div className="recent-crossing-container">
      <button className="back-btn">← Back</button>
      <h2 className="title">Recent Crossing</h2>
      <div className="crossing-table-wrapper">
        <div className="crossing-table">
          <div className="table-header">
            <div>User</div>
            <div>Crossing Date & Time</div>
            <div>Crossing Location</div>
            <div>Notification</div>
            <div>Immediately Call & Msg</div>
            <div>Meet Place</div>
          </div>

          {/* Sample Row */}
          <div className="table-row">
            {/* User */}
            <div className="user-cell">
              <div className="user-profiles">
                <div className="profile-block">
                  <img
                    src="https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_1280.jpg"
                    alt="user1"
                    className="profile-pic"
                  />
                  <div className="user-id">UserID123</div>
                </div>

                <span className="double-arrow">↔</span>

                <div className="profile-block">
                  <img
                    src="https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg"
                    alt="user2"
                    className="profile-pic"
                  />
                  <div className="user-id">UserID456</div>
                </div>
              </div>
            </div>

            {/* Date & Time */}
            <div className="datetime-cell">24 June 2025, 4:32 PM</div>

            {/* Location */}
            <div className="location-cell">
              <div className="place-name">Near Amanora Mall</div>
              <div className="location-name">Pune, India</div>
            </div>

            {/* Notification */}
            <div className="notification-cell">
              <div className="notif-profiles">
                <div className="profile-block">
                  <img
                    src="https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_1280.jpg"
                    alt="user1"
                    className="profile-pic"
                  />
                  <div className="seen-time">Seen at 4:35 PM</div>
                </div>

                <span className="double-arrow">↔</span>

                <div className="profile-block">
                  <img
                    src="https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg"
                    alt="user2"
                    className="profile-pic"
                  />
                  <div className="seen-time">Seen at 4:36 PM</div>
                </div>
              </div>
            </div>

            {/* Call & Msg */}
            <div className="call-msg-cell">
              <div className="call-info">
                <FaPhoneAlt className="call-icon" />
                <span>4:40 PM</span>
              </div>
              <div className="call-duration">Duration: 3m 20s</div>
            </div>

            {/* Meet Place */}
            <div className="meet-place-cell">Coffee House</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentCrossing
