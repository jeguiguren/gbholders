import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import { 
  Typography ,
  Grid,
  Paper,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from '@material-ui/core/';

import { Person, AccessTime } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: '5%',
  },
  media: {
    height: 300
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    minHeight: '75%',
    maxHeight: '100%',
  },
});

export default function NewsCard(props) {
  const classes = useStyles();

  const { title, preview, image, author, date,  } = props;
  const url = 'https://www.google.com';
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={e => window.open(url, '_blank')}>
        <Grid container direction="row" alignItems="left" spacing={4}>
          <Grid item xs={5}>
            <CardMedia
              className={classes.media}
              image={require("assets/img/DefaultNews.jpg")}
              title="Contemplative Reptile"
            />
          </Grid>
          <Grid item xs={7}>
            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">{preview}</Typography>
              <Grid container direction="row" alignItems="left" spacing={4}>
                <Grid item>
                  <Grid container direction="row" alignItems="center" spacing={1}>
                    <Grid item>
                      <Person />
                    </Grid>
                    <Grid item>
                      {author}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="row" alignItems="center" spacing={1}>
                    <Grid item>
                      <AccessTime />
                    </Grid>
                    <Grid item>
                      {date}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}