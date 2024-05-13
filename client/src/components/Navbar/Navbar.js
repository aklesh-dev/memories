import React, { useEffect, useState } from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import memories from '../images/memories.png'
import { useDispatch } from 'react-redux';


const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        setUser(null);
        // Redirect to home page
        navigate('/');
    }

    useEffect(() => {

        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar className='appBar' position="static" color="inherit"
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '30px 0',
                padding: '0 25px'
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography style={{ textDecoration: 'none' }} component={Link} to='/' className="heading" variant="h2" align="center">
                    Memories
                    <img src={memories} alt="memories" width='60' />
                </Typography>
            </div>
            <Toolbar style={{ display: 'flex', justifyContent: 'flex-end', width: '400px' }}>
                {user && user.result ? ( // Check if user and user.result are defined
                    <div style={{ display: 'flex', justifyContent: "space-between", width: '300px' }}>
                        <Avatar style={{ color: 'purple', backgroundColor: 'purple' }} alt={user.result.name} src={user.result.picture}>
                            {user.result.name.charAt(0)} {/* Accessing first character of the name */}
                        </Avatar>
                        <Typography style={{ display: 'flex', alignItems: 'center' }} variant='h6' >
                            {user.result.name}
                        </Typography>

                        {/* Logout Btn  */}
                        <Button variant='contained' color='secondary' onClick={logout}>Logout</Button>

                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant='contained' color='primary'>Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar