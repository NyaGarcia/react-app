import React, { FC, useEffect, useState } from 'react';

import { Hotel } from '../../common/interfaces/hotel.interface';
import { HotelCard } from './components/hotel-card.component';
import { Props } from './hotel-collection.props';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  listLayout: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

export const HotelCollectionComponent: FC<Props> = ({
  editHotel,
  loading,
  hotelCollection,
}: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.listLayout}>
      {hotelCollection.map((hotel: Hotel) => (
        <HotelCard hotel={hotel} key={hotel.id} editHotel={editHotel} />
      ))}
    </div>
  );
};
