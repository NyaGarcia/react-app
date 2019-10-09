import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { Hotel } from '../../common/interfaces/hotel.interface';
import { HotelCollectionComponent } from './hotel-collection.component';
import { getHotelCollection } from './hotel-collection.api';
import { loadingComponent } from 'common/utils/loading.hoc';
import { mapFromAToBCollection } from 'common/utils';
import { mapFromApiToVm } from './hotel-collection.mapper';
import { routesLinks } from 'core';

interface Props extends RouteComponentProps {}

export const HotelCollectionContainer = (props: Props) => {
  const editHotel = (id: string) => {
    props.history.push(routesLinks.hotelEdit(id));
  };

  const useHotelCollectionData = () => {
    const [hotelCollection, setHotelCollection] = useState<Array<Hotel>>([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const getHotelData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await getHotelCollection();
        setHotelCollection(mapFromAToBCollection(mapFromApiToVm, response));
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };

    useEffect(() => {
      getHotelData();
    }, []);
    return [{ hotelCollection, isError, isLoading }];
  };

  const [{ hotelCollection, isError, isLoading }] = useHotelCollectionData();
  const Component: FC<Props> = loadingComponent(HotelCollectionComponent);

  return <Component editHotel={editHotel} loading={isLoading} hotelCollection={hotelCollection} />;
};
