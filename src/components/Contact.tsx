import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import GitHubIcon from '@material-ui/icons/GitHub'
import Avatar from '@material-ui/core/Avatar'
import { green, blue, purple } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
  purple: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
  },
}));

const Contact: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h5' >
            Contact
          </Typography>
        </Box>
        
        <Box className={classes.root} display='flex' justifyContent='center' p={1}>
          <Link href='https://github.com/G-Sho' color='inherit'>
            <Avatar className={classes.purple}>
              <GitHubIcon />
            </Avatar>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Contact;
