import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import { ToastContainer } from 'react-toastify';
import AuthState from './states/AuthState.jsx';
import CategoryState from './states/CategoryState.jsx';

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <CategoryState>
      <AuthState>
          <RouterProvider router={router} />
          <ToastContainer />
      </AuthState>
    </CategoryState>
    // </StrictMode>,
)
