import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

import './styles.css';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative'
      }}>

      <CardMedia
        style={{
          height: '0',
          paddingTop: '56.25%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backgroundBlendMode: 'darken',
        }}
        image={post.selectedFile}
        title={post.title}
      />
      <div className='overlay'>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className='overlay2'>
        <Button style={{ color: 'white' }} size='small' onClick={() => setCurrentId(post._id) }>
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>
      <div className='details'>
        <Typography variant='body2' color='textSecondary'>{post.tags && post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
        <Typography className='title' variant='h5' gutterBottom>{post.title}</Typography>
      <CardContent>
        <Typography  variant='body2' color="textSecondary" component='p' >{post.message}</Typography>
      </CardContent>

      <CardActions className='cardActions' >
        {/* Like Btn */}
        <Button size='small' color='primary' onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize='small' />
          &nbsp; Like &nbsp;
          {post.likeCount}
        </Button>

        {/* Delete Btn */}
        <Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize='small' />
          Delete
        </Button>
      </CardActions>

    </Card >
  )
}

export default Post