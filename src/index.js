import { render } from 'react-dom';
import React from 'react';
import { Router, Switch, Route } from '@bsonntag/router';
import { Navigation } from './components/navigation';
import { Link } from './components/link';
import { AcpTableOfContents } from './components/acp-table-of-contents';
import { AcpPage35 } from './components/acp-page-35';
import { LoudTableOfContents } from './components/loud-table-of-contents';
import { LoudPage12 } from './components/loud-page-12';
import { LoudPage8 } from './components/loud-page-8';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <main className='container'>
            <h1>Welcome</h1>
            <Link to='/1'>Let&apos;s get started</Link>
          </main>
        </Route>

        <Route path='/1'>
          <AcpTableOfContents />
          <Navigation />
        </Route>
        <Route path='/2'>
          <AcpPage35 />
          <Navigation />
        </Route>
        <Route path='/3'>
          <LoudTableOfContents />
          <Navigation />
        </Route>
        <Route path='/4'>
          <LoudPage12 />
          <Navigation />
        </Route>
        <Route path='/5'>
          <LoudPage8 />
          <Navigation />
        </Route>

        <main className='container'>
          <h1>That&apos;s all, folks!</h1>
          <Link to='/1'>Go back to the beginning</Link>
        </main>
      </Switch>
    </Router>
  );
}

render(<App />, document.getElementById('root'));
