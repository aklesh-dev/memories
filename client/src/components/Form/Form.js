import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import './styles.css';
import { createPost, updatePost } from '../../actions/posts';

const Form = ( {currentId, setCurrentId } ) => {
  const [postData, setpostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });

  // Get the post from the store if currentId is provided
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId ) : null);
  
  const dispatch = useDispatch();

  // Set the post data state if a post is found in the store
  useEffect(() =>{
    if(post) setpostData(post);
  }, [post]);

  // Handle form submission
  const handleSubmit = (e) => {

    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    }
    else{
      dispatch(createPost(postData));
    }
    clear();
  }
  
  const clear = () => {
    setCurrentId(null);
    setpostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: ''
    });
  }

  return (
    <Paper className='paper'>
      <form autoComplete="off" noValidate className='root form' onSubmit={handleSubmit}>
        <Typography variant="h6">{ currentId ? 'Editing' : 'Creating' } a Memory</Typography>
        <TextField name="creator" variant="outlined" label="Creator" style={{ margin: '8px' }} fullWidth value={postData.creator} onChange={(e) => setpostData({ ...postData, creator: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" style={{ margin: '8px' }} fullWidth value={postData.title} onChange={(e) => setpostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" style={{ margin: '8px' }} fullWidth value={postData.message} onChange={(e) => setpostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags" style={{ margin: '8px' }} fullWidth value={postData.tags} onChange={(e) => setpostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className='fileInput'>
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) => setpostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <Button className='buttonSubmit' variant="contained" style={{ margin: '6px' }} color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" style={{ margin: '6px' }} size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form