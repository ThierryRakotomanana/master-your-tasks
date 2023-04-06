import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {Task} from './taskList/Task';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Task/>);