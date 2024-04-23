import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const Career: React.FC = () => {
  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='h5' >
            Career
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='body1' align='left'>
            2021/04 ～ 2025/03(卒業予定) 工学院大学 情報学部 情報通信工学科
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Career;