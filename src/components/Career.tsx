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
            2021/04 ～ 2025/03 工学院大学 情報学部 情報通信工学科<br />
            2025/04 ～ 2027/03(卒業予定) 工学院大学 大学院 工学研究修士課程 電気電子工学専攻
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Career;