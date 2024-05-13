import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input';

const Auth = () => {
    
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    
    const handleSubmit = () => {

    };
    const handleChange = () => {

    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    };

    return (
        <Container component='main' maxWidth="sm">
            <Paper elevation={3} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '8px', padding: '12px 80px' }}>
                <Avatar style={{ margin: '5px', backgroundColor: 'Highlight' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>

                <form style={{ width: '100%', marginTop: '16px' }} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                                    <Input name='lastName' label='Last Name' handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
                        <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {
                            isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />
                        }
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' style={{ margin: '24px 0 16px' }} >
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode} >
                                {
                                    isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"
                                }
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </Paper>

        </Container>
    )
}

export default Auth