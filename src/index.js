import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import quotesJSON from "./quotes.json";

/* define dummy quotes for when JSON import fails */
const colors = ['#007bff','#6610f2','#6f42c1','#e83e8c','#dc3545','#fd7e14','#ffc107','#28a745','#20c997','#17a2b8','#6c757d','#343a40','#007bff','#6c757d','#28a745','#17a2b8','#ffc107','#dc3545','#343a40','#1f19c3','#008000'];
let quotes = [
  {id: 1, quote: "You act like it's you against the world, but it's really you against yourself.", author: "unknown author"},
  {id: 2, quote: "Black is beautiful. Black isn’t power. Knowledge is power. You can be black as a crow or white as snow but if you don’t know and you ain’t got no dough, you can’t go and that’s for sho’.", author: "Lewis H. Michaux"},
  {id: 3, quote: "You think your pain and your heartbreak are unprecedented in the history of the world, but then you read. It was books that taught me that the things that tormented me most were the very things that connected me with all the people who were alive, who had ever been alive.", author: "James Baldwin"}
]

/* replace dummy quotes by data from imported JSON */
const getStoreData = () => {
  return JSON.parse(JSON.stringify(quotesJSON));
}

const initState = () => {
  quotes = getStoreData();
  return {
    quote: quotes[Math.floor(Math.random() * quotes.length)],
    color: colors[Math.floor(Math.random() * colors.length)],
    className: 'animated delay-0.5s fadeIn'
    }
}

//define state
const initialState =  initState(); 

//define rootReducer
const rootReducer = (state = initialState, action) => {

    switch(action.type){
      case 'NEW_QUOTE':
        return initState();  

      default:
        return state;
    }

}

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
