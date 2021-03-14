import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  list: {
    width: 450,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer(rightdrawer) {
  const classes = useStyles();
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
    <div>
          <Button onClick={toggleDrawer('right', true)}>Right</Button>
          <Drawer anchor={"right"} open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
          </Drawer>
    </div>
  );
}
