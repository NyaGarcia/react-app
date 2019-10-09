import {
  CardActions,
  CardContent,
  CardMedia,
  Theme,
  Typography,
  makeStyles,
} from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Hotel } from '../../../common/interfaces/hotel.interface';
import IconButton from '@material-ui/core/IconButton/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';

interface Props {
  hotel: Hotel;
  editHotel: (id: string) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: '500px',
    marginTop: theme.spacing(2),
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%',
  },
}));

export const HotelCard = ({ hotel, editHotel }: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar aria-label='Hotel'>{hotel.rating}</Avatar>}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={hotel.name}
        subheader={hotel.address}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <CardMedia image={hotel.picture} title={hotel.name} className={classes.cardMedia} />
          <Typography variant='subtitle1' gutterBottom>
            {hotel.description}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton aria-label='Add to favorites' onClick={() => editHotel(hotel.id)}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label='Share'>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
