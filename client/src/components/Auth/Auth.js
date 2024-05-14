import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { GoogleLogin } from '@react-oauth/google';
import Input from './Input';
import Icon from './icon';
import { useDispatch } from 'react-redux';
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);

    // Toggling show/hide password
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = (e) => {
        e.preventDefault();     // Preventing default form submission behavior
        
        if (isSignup) {
            dispatch(signup(formData, navigate));
        } else {
            dispatch(signin(formData, navigate));            
        }

    };
    //
    const handleChange = (e) => {
        // Updating form data on input change
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const switchMode = () => {
        // Toggling between sign up and sign in modes
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    };

    const googleSuccess = async (res) => {
        const credential = res.credential;  // Extracting credential from response
        const decodedToken = jwtDecode(credential); // Decode the JWT token

        // Extract the user's information and the token from the decoded token
        const result = decodedToken;
        const token = credential; // The credential itself is the token

        // console.log(result, token);

        // Dispatch the action to the reducer   
        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            // Redirect the user to the home page
            navigate('/');

        } catch (error) {
            console.log(error);
        }
    };
    const googleFailure = () => {
        console.log("Google Sign In Failed. Try again!");
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

                    {/* Sign In Btn */}
                    <Button type='submit' fullWidth variant='contained' color='primary' style={{ margin: '24px 0 16px' }} >
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>

                    {/* Google login Btn */}
                    <GoogleLogin
                        clientId='141925858304-k2glc8jnhtr4im44r6nik0tve89ug7tf.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <Button
                                style={{ marginBottom: '16px' }}
                                color='primary'
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon />}
                            >
                                Google Sign-in
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy='single_host_origin'

                    />

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