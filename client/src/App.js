import React from 'react'
import { Typography, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import VideoPlayer from './components/VideoPlayer'
import Notification from './components/Notification'
import Options from './components/Options'

const useStyles = makeStyles( (theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: 'none',
        background: 'linear-gradient(100deg, rgba(199, 28, 237, 0.9) 0%, rgba(222, 93, 190, 0.9) 50%, rgba(237, 57, 150, 0.9))',
    
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      },
}))

const App = () => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}> 
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center" style={{color: '#eee'}}>Video Chat</Typography>
            </AppBar>
            <VideoPlayer/>
            <Options>
                <Notification/>
            </Options>
        </div>
    )
}

export default App
