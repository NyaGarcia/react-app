import React, { useEffect, useState, FC } from 'react';
import { Props } from './hotel-collection.props';
import { HotelCard } from './components/hotel-card.component';
import { Hotel } from './hotel-collection.interface';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  listLayout: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

export const HotelCollectionComponent: FC<Props> = ({ loading, hotelCollection }: Props) => {
  //const [isLoading] = useState(loading);
  const classes = useStyles();

  useEffect(() => console.log(loading));

  return (
    <div className={classes.listLayout}>
      {hotelCollection.map((hotel: Hotel) => (
        <HotelCard hotel={hotel} key={hotel.id} />
      ))}
    </div>
  );
};
