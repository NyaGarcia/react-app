import React, { useState, useEffect, FC } from 'react';
import { HotelCollectionComponent } from './hotel-collection.component';
import { Hotel } from './hotel-collection.interface';
import { getHotelCollection } from './hotel-collection.api';
import { mapFromAToBCollection } from 'common/utils';
import { mapFromApiToVm } from './hotel-collection.mapper';
import { loadingComponent } from 'common/utils/loading.hoc';
import { Props } from './hotel-collection.props';

export const HotelCollectionContainer = () => {
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

  return <Component loading={isLoading} hotelCollection={hotelCollection} />;
};
