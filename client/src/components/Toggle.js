import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Itinerary } from './Itineraries';

const useStyles = makeStyles(theme => ({
  card: {maxWidth: 345},
  media: {height: 0, paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {transform: 'rotate(180deg)',
}}));

export default function Toggle(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  }; 

  return (  
      <Card className={classes.card}>
      <CardHeader title = {props.itinerary.title}/>
      <CardActions disableSpacing>
      <IconButton
          className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
       <ExpandMoreIcon />
      </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
           Primer paragraph
          </Typography>
          <Typography paragraph>
            Second paragraph
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
