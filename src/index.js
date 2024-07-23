import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./reducer/store";
// import { productsFetch } from "./slices/productsSlice";
// import { personalFetch } from "./slices/personalSlice";
// import { propertyFetch } from "./slices/propertySlice";
// import { blogFetch } from "./slices/blogSlice";
// import { propertyLLCFetch } from "./slices/llcSlice";
// import {berbixdataFetch} from "./slices/berbixSlice";
// import { usersFetch } from './slices/UsersSlice';
// import { usersFetchbyID } from './slices/UsersSlice';

// store.dispatch(productsFetch());
// store.dispatch(getTotals());
// store.dispatch(personalFetch());
// store.dispatch(propertyFetch());
// store.dispatch(blogFetch());
// store.dispatch(propertyLLCFetch());
// store.dispatch(berbixdataFetch());
// store.dispatch(usersFetch());
// store.dispatch(usersFetchbyID());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
