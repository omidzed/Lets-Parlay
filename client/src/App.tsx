import React from 'react';
import { EventsCarousel } from './components/EventsCarousel';
import { NavBar } from './components/NavBar';

const App: React.FC = () => (
  <div>
    <NavBar />
    <EventsCarousel />
  </div>
);

export default App;
