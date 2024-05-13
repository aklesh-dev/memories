import React from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import memories from '../images/memories.png'


const Navbar = () => {

    const user = null;

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
                <Typography style={{ textDecoration: 'none'}} component={Link} to='/' className="heading" variant="h2" align="center">
                    Memories
                    <img src={memories} alt="memories" width='60' />
                </Typography>
            </div>
            <Toolbar style={{display: 'flex', justifyContent: 'flex-end', width: '400px'}}>
                {user ? (
                    <div style={{display: 'flex', justifyContent: "space-between", width: '400px'}}>
                        <Avatar style={{color: 'purple', backgroundColor: 'purple'}} alt={user.result.name} src={user.result.imageUrl} >{user.result.charAt(0)}</Avatar>
                        <Typography style={{display: 'flex', alignItems: 'center' }} variant='h6' >{user.result.name}</Typography>
                        <Button variant='contained' color='secondary'>Logout</Button>
                    </div>

                ) : (
                    <Button component={Link} to='/auth' variant='contained' color='primary'>Sign In</Button>
                )
                }
            </Toolbar>
        </AppBar>
    )
}

export default Navbar