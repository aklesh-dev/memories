import React from "react";
import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import './index.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {

    return (
        <GoogleOAuthProvider clientId='141925858304-k2glc8jnhtr4im44r6nik0tve89ug7tf.apps.googleusercontent.com'>
            <BrowserRouter>
                <Container maxWidth="lg">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/auth" element={<Auth />} />
                    </Routes>

                </Container>
            </BrowserRouter>
        </GoogleOAuthProvider>
    )
}
export default App;