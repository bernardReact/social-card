import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RandomText from "./RandomText";
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {minWidth: 275,},
  title: {fontSize: 50,},
  pos: {marginBottom: 12,
        },
  bg1:props=>({backgroundColor:props.backgroundColor,}),
  tc1:props=>({color:props.tc1}),tc3:props=>({color:props.tc3}),
  t2:props=>({marginBottom: props.mgB,fontWeight: props.fW})
});


 function CardArea(prop){
     const props={backgroundColor:"orange",tc1:"white",tc3:"grey",mgB:"10px",fW:"bold"}
     const classes = useStyles(props);


     return (
       <Grid  style={{ display: 'inline-block' }} item xs={12} sm={6} lg={3} >
       <Card  >
         <CardContent className={classes.bg1}>
           <Typography variant="h2" className={classes.tc1}>
             {prop.text1}
           </Typography>
         </CardContent>
         <CardContent>
           <Typography className={classes.t2}>{prop.text2}</Typography>
           <Typography className={classes.tc3}>
            {prop.text3}
           </Typography>
         </CardContent>
       </Card>
       </Grid>

     );
 }


class App extends React.Component{
    render(){
     return (
       <Grid container spacing={2} >
       {RandomText.map(text=>
        
         
         <CardArea
           text1={text.text1}
           text2={text.text2}
           text3={text.text3}
         />
         
        
       )}
       </Grid>
     );
    }
}

export default App;