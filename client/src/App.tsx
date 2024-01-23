import React from 'react';
import { EventsCarousel } from './components/EventsCarousel';
import { NavBar } from './components/NavBar';

export default function App() {
  return (
    <div>
      <NavBar />
      <EventsCarousel />
    </div>
  );
}
