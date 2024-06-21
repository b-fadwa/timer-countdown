import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC } from 'react';

import { ITimerProps } from './Timer.config';

const Timer: FC<ITimerProps> = ({ style, className, classNames = [] }) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

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
            'h-60 w-60 rounded-full shadow-lg ring ring-gray-400 flex justify-center items-center relative',
          )}
        >
          <span className={cn('timer-text', 'absolute text-4xl font-mono')}>00:00:00</span>
          <button
            className={cn(
              'timer-reset-button',
              'absolute right-0 bottom-0 rounded-full bg-gray-400 text-xl w-20 h-20',
            )}
          >
            Reset
          </button>
        </div>
        <button
          className={cn(
            'timer-start-button',
            'rounded-md bg-gray-400 text-xl w-40 h-12',
          )}
        >
          Stop/Start
        </button>
      </div>
    </div>
  );
};

export default Timer;
