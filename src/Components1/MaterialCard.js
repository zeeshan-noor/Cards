import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Profile from '../profile.json';
import * as AiIcons  from 'react-icons/ai';
import './MaterialCard.css' ;
import clsx from 'clsx';
// import Drawer from './Drawer';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
 
  list: {
    width: 450,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
 
 const [star, setstar] = useState(true);

 const eventHandlerStar =( )=>setstar(!star);


 const [state, setState] = React.useState({right: false});

 const toggleDrawer = (anchor, rightdrawer) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: rightdrawer });
  };

  const list = () => (
    <div className={clsx(classes.list)}  >
       Zeeshan
    </div>
  );


  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
        {Object.keys(Profile).map((keyName,index)=>(
            <Grid key={index} item>
               <div className="card">
                   <div className='uper-container' key={index}>
                <AiIcons.AiOutlineStar  onClick={eventHandlerStar} style={{marginLeft:'85%',width:'25px',height:'25px', color:'white',cursor:'pointer'}}/>
                <div className='image-container'>
                <img src={Profile[keyName].profile_pic }height={200} width={300} alt='profile' />
                </div>
                </div>
                <div className='lower-container' key={index}>
            <h3>{Profile[keyName].name}</h3>
            <h3>{Profile[keyName].JOB}</h3>
            <p>{Profile[keyName].Description}</p>
            <div className='button'>
          <Button onClick={toggleDrawer('right', true)}>Send Request</Button>
          <Drawer anchor={"right"} open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
          </Drawer>
    </div>
     </div>
        </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
