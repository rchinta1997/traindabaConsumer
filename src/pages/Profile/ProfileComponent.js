import React, { useState } from "react";


const Profile = () => {

    return (
        <li className="dropdown">
            <a href="#rail_tools_area">
                <span className="fa fa-user"></span>
            </a>
            <ul>
                <li>
                    <a href="#">Account</a>
                </li>
                <li>
                    <a href="#">Settings</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </li>
    );

}



export default Profile;