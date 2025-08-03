import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme.ts';
import { PATHS } from './constants/paths.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './components/pages/Landing.tsx';
import Input from './components/pages/Input.tsx';
import Main from './components/pages/Main.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Result from './components/pages/Result.tsx'

const queryClient = new QueryClient();

/**
 * 라우팅 생길 때마다 추가
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // 여기서 App.tsx가 Outlet 역할을 해줌
    children: [
      {
        path: PATHS.LANDING,
        element: <Landing />,
      },
      {
        path: PATHS.INPUT,
        element: <Input />,
      },
      {
        path: PATHS.MAIN,
        element: <Main />,
      },
      {
        path: PATHS.RESULT,
        element: <Result />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
