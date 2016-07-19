// @flow

import React from 'react';
import { TimelessStateless, TimelessClass, TimelyStateless } from './timeless';

const err = <TimelessClass />; // Class component wrapped in HOC checks
const ok = <TimelessClass name='Sally' excited={true} />;

const err1 = <TimelessStateless />; // This should error! Stateless component wrapped in HOC doesn't check, but it does if TimelessStateless is used in timeless.js!
const ok1 = <TimelessStateless name='Sally' excited={true} />;

const err2 = <TimelyStateless />; // Simple stateless component checks
const ok2 = <TimelyStateless name='Sally' excited={true} date={new Date()} />;
