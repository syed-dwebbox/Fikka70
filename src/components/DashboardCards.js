import React from 'react'
import { Grid,Typography,CardContent,Card} from '@mui/material';

function DashboardCards({data}) {
  return (
    <div>
      
      <Grid  item >
    <Card  sx={{boxShadow: "0px 14.71571px 52.86286px 0px rgba(0, 0, 0, 0.08)",margin:"10px",width:"260px"}}  >
    <CardContent>
          <Typography gutterBottom variant="h5" sx={{color: "#C9234A",fontSize:"18px",fontWeight:"500"}} >
          {data.name}
          </Typography>
          <Typography variant="body2" sx={{fontSize:"20px",fontWeight:'500',color:"black"}}>
          {data.value}
          </Typography>
        </CardContent>
    </Card>
  </Grid>

    </div>
  )
}

export default DashboardCards
