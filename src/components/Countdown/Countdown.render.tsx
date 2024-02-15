import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';

import { ICountdownProps } from './Countdown.config';

const Countdown: FC<ICountdownProps> = ({ header, style, className, classNames = [] }) => {
  const { connect } = useRenderer();
  const [value, setValue] = useState<Date>(new Date());
  const [countDown, setCountDown] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const {
    sources: { datasource: ds },
  } = useSources();

  useEffect(() => {
    if (!ds) return;

    const listener = async (/* event */) => {
      const v = await ds.getValue();
      setValue(v);
    };

    listener();

    ds.addListener('changed', listener);

    return () => {
      ds.removeListener('changed', listener);
    };
  }, [ds]);

  const initCountDown = () => {
    const diff: number = +new Date(value) - +new Date();
    //+new Date() returns the current timestamp in milliseconds
    //do the difference from the current date
    if (diff > 0) {
      return {
        //format the diff output in days.hours,minutes, seconds
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  //used to decrement the countdown by 0ne during some interval automatically
  useEffect(() => {
    setCountDown(initCountDown());
    console.log('value ' + value + ' coutdown ' + countDown);
  }, [value]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountDown((prevCountDown) => {
        const newCountDown = { ...prevCountDown };
        if (newCountDown.seconds > 0) {
          newCountDown.seconds--;
        } else {
          newCountDown.seconds = 59;
          if (newCountDown.minutes > 0) {
            newCountDown.minutes--;
          } else {
            newCountDown.minutes = 59;
            if (newCountDown.hours > 0) {
              newCountDown.hours--;
            } else {
              newCountDown.hours = 23;
              if (newCountDown.days > 0) {
                newCountDown.days--;
              }
            }
          }
        }
        return newCountDown;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <>
        {header != null && (
          <div className={cn('countdown-header', 'text-4xl text-center')}>{header}</div>
        )}
      </>
      <div className={cn('countdown-container', 'flex justify-center items-center space-x-4')}>
        <div
          className={cn(
            'countdown-days',
            'w-32 h-32 border-2 rounded-md border-red-600 font-mono text-2xl',
          )}
        >
          {countDown?.days} days
        </div>
        <div
          className={cn(
            'countdown-hours',
            'w-32 h-32 border-2 rounded-md border-red-600 font-mono text-2xl',
          )}
        >
          {countDown?.hours} hours
        </div>
        <div
          className={cn(
            'countdown-minutes',
            'w-32 h-32 border-2 rounded-md border-red-600 font-mono text-2xl',
          )}
        >
          {countDown?.minutes} minutes
        </div>
        <div
          className={cn(
            'countdown-seconds',
            'w-32 h-32 border-2 rounded-md border-red-600 font-mono text-2xl',
          )}
        >
          {countDown?.seconds} seconds
        </div>
      </div>
    </div>
  );
};

export default Countdown;
