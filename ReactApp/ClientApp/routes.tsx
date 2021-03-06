import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Counter from './components/Counter';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/projects' component={Projects} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
</Layout>;
