import React, { FC, Component } from 'react';

interface LoadingProp {
  loading: boolean;
}

const LoadingSpinner = () => <div>Loading...</div>;

export const loadingComponent = <P extends object>(Component: FC<P>): FC<P & LoadingProp> => ({
  loading,
  ...props
}) => {
  return loading ? <LoadingSpinner /> : <Component {...(props as P)} />;
};
