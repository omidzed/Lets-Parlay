import { BetsProvider } from './BetsProvider';
import { PropsWithChildren } from 'react';
import { EventsProvider } from './EventsProvider';
import { ModalProvider } from './ModalProvider';
import { UserProvider } from './UserProvider';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <UserProvider>
      <EventsProvider>
        <ModalProvider>
          <BetsProvider>{children}</BetsProvider>
        </ModalProvider>
      </EventsProvider>
    </UserProvider>
  );
};
