import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Button } from '@/components/ui/button';
import { TodoItem } from './entities/todo/ui/todo-item/todo-item';
import { MainPage } from './pages/main-page/MainPage';
function App() {
  return (
    <>
      <MainPage />
    </>
  );
}

export default App;
