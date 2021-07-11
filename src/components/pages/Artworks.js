import React from 'react';
import '../css/Artworks.css';
import ArtistNavbar from '../ArtistNavbar';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Artworks() {
  const classes = useStyles();

  return (
     <div className="A"> 
      <ArtistNavbar/>

     
    <div className="B">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1580089056071-11f31b94fefe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Artwork1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Artwork description comes here...<br /><br />Rs. 4500.00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          View Artwork
        </Button>
      </CardActions>
    </Card>
    </div>
    <div className="D">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1559102877-4a2cc0e37fce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=652&q=80"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Artwork2
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Artwork description comes here...<br /><br />Rs. 3500.00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          View Artwork
        </Button>
      </CardActions>
    </Card>
    </div>
    
    </div>
  );
}
