import React, { useContext } from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { SocketContext } from '../SocketContext'

const useStyles = makeStyles((theme) => ({
    video: {
      width: '550px',
      [theme.breakpoints.down('xs')]: {
        width: '300px',
        maxHeight: '200px'
      },
    },
    gridContainer: {
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        alignContent: 'center',
      },
    },
    paper: {
      padding: '10px',
      margin: '10px',
    },
    grid: {
      width: 'auto'
    },
    userName: {
      color: '#b557cf'
    }
}));

const VideoPlayer = () => {
    const { name, callAccepted, callEnded, myVideo, userVideo, stream, call } = useContext(SocketContext)
    const classes = useStyles()

    return (
        <Grid container className={classes.gridContainer}>
            { /* My own video */}
            {stream && (
                <Paper className={classes.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom className={classes.userName}>{ name || 'Name'} re</Typography>
                        <video playsInline muted ref={myVideo} autoPlay className={classes.video}/>
                    </Grid>
                </Paper>
            )}

            { /* user's video */}
            {callAccepted  && !callEnded && (
                <Paper className={classes.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom className={classes.userName}>{call.name || 'Name'}</Typography>
                        <video playsInline  ref={userVideo} autoPlay className={classes.video}/>
                    </Grid>
                </Paper>
            )}                
        </Grid>
    )
}

export default VideoPlayer