import React, { useEffect, useContext } from 'react';
import "../../styles/Profile.css";
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../component/navbar';



export const Profile = () => {
    const { store, actions } = useContext(Context);
    


    useEffect(() => {
            actions.getUser()
    }, []);


    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return (

                <div>
                     <Navbar/>
                    <div> 
                    <h1 className="text-center"> My Profile</h1>
                    <div className="card-profile">
                    <h1 className='name-profile'> {store.user.first_name} {store.user.last_name} </h1>
                        <div className="card-border-top-profile"></div>
                        <div className="img-profile">
                            <img src={`https://robohash.org/${randomNumber}`} alt="Profile" />
                        </div>
                        <span>Email: {store.user.email} </span>
                    </div>
                </div>
                </div>
                
            );
        };
