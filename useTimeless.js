// @flow

import React from 'react';
import { TimelessStateless, TimelessClass } from './timeless';

const err = <TimelessClass />;
const ok = <TimelessClass name='Sally' excited={true} />;

const err1 = <TimelessStateless />; // This should error, but it doesn't unless TimelessStateless is used in timeless.js!
const ok1 = <TimelessStateless name='Sally' excited={true} />;