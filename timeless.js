// @flow

import React from 'react';

type TimelyProps = {
  date: Date,
  name: string,
  excited: boolean
};

class TimelyClass extends React.Component<void, TimelyProps, void> {
  render() {
    const hours = this.props.date.getHours();
    const timeOfDay = hours > 17 ? 'Evening' : hours > 12 ? 'Afternoon' : 'Morning';

    return (
      <div>
        Good {timeOfDay} {this.props.name} {this.props.excited ? '!' : ''}
      </div>
    );
  }
}

export const TimelyStateless = (props: TimelyProps) => {
    const hours = props.date.getHours();
    const timeOfDay = hours > 17 ? 'Evening' : hours > 12 ? 'Afternoon' : 'Morning';

    return (
        <div>
        Good {timeOfDay} {props.name} {props.excited ? '!' : ''}
        </div>
    );
}

type Injected = {date: Date}

type InjectDateToClass = <D, P, C: React$Component<D, P, any>>(
  Komponent: Class<C>
) => Class<React$Component<D, $Diff<P, Injected>, any>>;

type InjectDateStateless = <P>(component: (props: P) => any) => Class<React$Component<void, $Diff<P, Injected>, any>>;

declare var injectDateStateless: InjectDateStateless & InjectDateToClass;

export const TimelessClass = injectDateStateless(TimelyClass);

// const err = <TimelessClass />;

// const ok = <TimelessClass name='Sally' excited={true} />;

export const TimelessStateless = injectDateStateless(TimelyStateless);

// const err = <TimelessStateless />;

// Uncommenting next line suddenly makes TimelessStateless check in useTimeless.js!
// const ok = <TimelessStateless name='Sally' excited={true} />;
