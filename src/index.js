import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './_apis_';
//
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals'; 
import { CollapseDrawerProvider } from './contexts/CollapseDrawerContext';
import { SettingsProvider } from './contexts/SettingsContext';
import './index.css'
import './satoshi.css'
// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <CollapseDrawerProvider>
      <BrowserRouter>
        <SettingsProvider>
     
            <App />
         
        </SettingsProvider>
      </BrowserRouter>
    </CollapseDrawerProvider>
  </HelmetProvider>
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();