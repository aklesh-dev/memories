import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import memories from './components/images/memories.png'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
// import useStyle from './styles';
import './index.css';
import { getPosts } from './actions/posts';

const App = () => {
    // const classes = useStyle();

    // eslint-disable-next-line
    const isMobile = window.innerWidth = 600;

    const [currentId, setCurrentId] = useState(null);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className='appBar' position="static" color="inherit"
                style={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '30px'
                }}
            >
                <Typography className="heading" variant="h2" align="center">
                    Memories
                </Typography>
                <img className="image" src={memories} alt="memories"  width='60' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container  justify="space-between" alignItems="stretch" spacing={3}
                        
                    >
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
export default App;