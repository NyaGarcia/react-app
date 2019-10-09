import React, { StatelessComponent, useState } from 'react';

export interface SessionContextProps {
  username: string;
  updateUsername: (value: string) => void;
}

export const createDefaultUser = (): SessionContextProps => ({
  username: 'unknown',
  updateUsername: value => {
    console.error(
      'if you are reading this, you probably forgot to add the provider on top of your app'
    );
  },
});

export const SessionContext = React.createContext<SessionContextProps>(createDefaultUser());

export const SessionProvider: StatelessComponent = props => {
  const [username, setUsername] = useState<string>('');

  return (
    <SessionContext.Provider value={{ username, updateUsername: setUsername }}>
      {props.children}
    </SessionContext.Provider>
  );
};
