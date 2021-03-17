import React from 'react'
import '../css/UserCard.css'

import {FiInstagram,FiFacebook,FiTwitter} from 'react-icons/fi'

const UserCard = ({name,profilePic, role}) => {
    return (
        <div className="user-card">
                <div className="user-data">
                    <img src={profilePic} alt="profile picture" className="user-image" />
                    
                    <div className="user-name-title">
                        <h1 className="user-name">{name}</h1>
                        <span className="user-role">{role}</span>
                    </div>
                </div>
                <div className="user-social-media">
                    <a href="#" className="social-media"><FiInstagram /></a>
                    <a href="#" className="social-media"><FiFacebook /></a>
                    <a href="#" className="social-media"><FiTwitter /></a>
                </div>
         </div>
    )
}

export default UserCard
