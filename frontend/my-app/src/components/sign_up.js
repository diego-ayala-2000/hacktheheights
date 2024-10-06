import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Event from './event';

export default function SignUp() {

  return (
    <form class="box">
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="email" placeholder="e.g. alex@example.com" />
      </div>
    </div>
  
    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input class="input" type="password" placeholder="********" />
      </div>
    </div>
  
    <button class="button is-primary">Sign in</button>
  </form>
  );
};
