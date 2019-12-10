import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  card: { maxWidth: 345 },
  media: {
    height: 0, paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

export default function Toggle(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (  //Utilizar como props.activities

    <Card className={classes.card}>
      <CardHeader className="cardHeader"
        avatar={<img className="picture" src={props.itinerary.img} alt="User" />}
        title={props.itinerary.title}
        subheader={props.itinerary.rating} 
      />
      <CardActions className = "action" disableSpacing>
        <IconButton
          className={clsx(classes.expand, { [classes.expandOpen]: expanded, })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {props.activities.map(activity => {
              if (props.itinerary._id === activity.itineraryId) {
                return (<React.Fragment key={activity._id}>
                <div>
                  <h5>{activity.name}</h5>
                  <h6>Duration: {activity.duration} hours</h6>
                  <h6>Price: {activity.price}€</h6>
                  <p className="descriptions">"{activity.description}"</p>
                </div>
                </React.Fragment>)
              }
            })}
        </CardContent>
      </Collapse>
    </Card>
  );
}
