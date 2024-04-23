import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    width: 730,
    maxWidth: '100%',
  },
});

const Skills: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h5' >
            Skills
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">
                研究キーワード
              </Typography>
              <Typography color="textSecondary">
                hoge / hoge / hoge
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">
                所属学会
              </Typography>
              <Typography color="textSecondary">
                hoge
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">
                資格
              </Typography>
              <Typography color="textSecondary">
                基本情報技術者(2022年6月認定) / hoge / hoge
              </Typography>
            </CardContent>
          </Card>
        </Box>




      </Box>
    </>
  );
}

export default Skills;
