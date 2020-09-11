import React from 'react';
import './App.css';
import { BirdingList } from './components/birding-list';
import { BirdingListStore } from './store/BirdingListStore';

function App() {
  const birdingListStore = new BirdingListStore();
  return <BirdingList store={birdingListStore} />;
}

export default App;