import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '@/pages/main-page';
import { NotFoundPage } from '@/pages/not-found';
import { ThemeProvider } from '@/app/providers/theme-provider';
import { ThemeToggle } from '@/features/change-theme/ui/change-theme-toggle';
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename='/todos-intern-task'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <ThemeToggle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
