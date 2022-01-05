import React,{useEffect, useRef} from 'react';
import '../App.css';
import {refreshToken} from '../slices/authentication/authenticationSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loadingspinner from './Loadingspinner';
import {NavLink} from 'react-router-dom';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header(){
    
}