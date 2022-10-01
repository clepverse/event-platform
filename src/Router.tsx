import { Routes, Route } from 'react-router-dom';
import { Event } from './pages/Event';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<div>HOME</div>} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}
