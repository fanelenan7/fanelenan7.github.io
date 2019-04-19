import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.scss';

const NotFound = () => (
  <article className="notfound">
    <p>
      It looks like you are a bit lost.
      <br />
      <br />
      <Link to="/" className="hl">Head back</Link>
    </p>
  </article>
);

export default NotFound;
