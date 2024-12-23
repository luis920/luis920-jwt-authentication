import React, { useEffect, useContext } from 'react';
import "../../styles/Profile.css";
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';



export const Profile = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()


    useEffect(() => {
            actions.getUser()
    }, [store.user]);


    const randomNumber = Math.floor(Math.random() * 10) + 1;

    const logout = () => {
        actions.logout();
        navigate('/');
    };
    return (

        
           

                <div>
                    <div>
                    <button onClick={logout} className='btn-primary-logout'>Logout</button>
                    <h1 className="text-center"> My Profile</h1>
                    <div className="card-profile">
                        <div className="card-border-top-profile"></div>
                        <div className="img-profile">
                            <img src={`https://robohash.org/${randomNumber}`} alt="Profile" />
                        </div>
                        <span>Name: </span>
                        <span>Birthdate: </span>
                        <span>Email: </span>
                    </div>
                </div>
                
                </div>
            );
        };
