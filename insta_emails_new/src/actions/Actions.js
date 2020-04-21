import axios from 'axios';
import config from '../config.json';
import { Auth } from 'aws-amplify';
import Cookies from 'js-cookie';
import ReactPixel from 'react-facebook-pixel';
export const FETCH_ITEMS = 'FETCH_ITEMS';
export const TIMEOUT = 'TIMEOUT';

export const fetchItems = () => dispatch => {
            dispatch({
                type: 'FETCH_ITEMS',
                items: [],
                timeout: false,
            });
        }