import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';

import { ITimerProps } from './Timer.config';

const Timer: FC<ITimerProps> = ({ style, className, classNames = [] }) => {
  const { connect } = useRenderer();
  const [value, setValue] = useState<number>(0);
  const [prevValue, setPrevValue] = useState<number>(0);
  const [myTimer, setTimer] = useState<any>();
  const {
    sources: { datasource: ds },
  } = useSources();

  useEffect(() => {
    if (!ds) return;

    const listener = async (/* event */) => {
      const v = await ds.getValue();
      setValue(v);
      setPrevValue(v);
    };

    listener();

    ds.addListener('changed', listener);

    return () => {
      ds.removeListener('changed', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ds]);

  const formatTime = (time: number) => {
    if (time >= 0) {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = Math.floor(time % 60);
      // Add leading zeros to ensure two-digit format
      const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

      if (hours > 0) {
        return `${hours}:${formattedMinutes}:${formattedSeconds}`;
      } else {
        return `${formattedMinutes}:${formattedSeconds}`;
      }
    } else {
      return '00:00';
    }
  };

  const resetTimer = () => {
    if (myTimer) {
      clearInterval(myTimer);
      setTimer(null);
      setValue(prevValue);
    }
  };

  const stopStartTimer = () => {
    if (myTimer) {
      clearInterval(myTimer);
      setTimer(null);
    } else {
      const newTimer = setInterval(() => {
        setValue((prevTime) => {
          let newTime = prevTime;
          if (newTime > 0) {
            newTime--;
          }
          return newTime;
        });
      }, 1000);
      setTimer(newTimer);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prevTime) => {
        let newTime = prevTime;
        if (newTime > 0) {
          newTime--;
        }
        return newTime;
      });
    }, 1000);
    setTimer(timer);
    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <div
        className={cn(
          'timer-container',
          'flex flex-col justify-center items-center gap-2 w-fit h-fit',
        )}
      >
        <div
          className={cn(
            'timer-content',
            'h-60 w-60 rounded-full ring ring-gray-400 flex justify-center items-center relative',
          )}
        >
          <span className={cn('timer-text', 'absolute text-4xl font-mono')}>
            {formatTime(value)}
          </span>
          <button
            className={cn(
              'timer-reset-button',
              'absolute right-0 bottom-0 rounded-full bg-gray-400 text-xl w-20 h-20',
            )}
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
        <button
          className={cn('timer-start-button', 'rounded-md bg-gray-400 text-xl w-40 h-12')}
          onClick={stopStartTimer}
        >
          {myTimer ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  );
};

export default Timer;
