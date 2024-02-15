import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC } from 'react';

import { ICountdownProps } from './Countdown.config';

const Countdown: FC<ICountdownProps> = ({ header, style, className, classNames = [] }) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <>
        {header != null && (
          <div className={cn('countdown-header', 'text-4xl text-center')}>{header}</div>
        )}
      </>
      <div className={cn('countdown-container', 'flex justify-center items-center space-x-4 ')}>
        <div
          className={cn(
            'countdown-days',
            'w-40 h-40 border-2 rounded-md bg-black font-mono text-4xl flex flex-col items-center justify-center text-white',
          )}
        >
          <span>00</span>
          <span>Days</span>
        </div>
        <div
          className={cn(
            'countdown-hours',
            'w-40 h-40 border-2 rounded-md bg-black font-mono text-4xl flex flex-col items-center justify-center text-white',
          )}
        >
          <span>00</span>
          <span>Hours</span>
        </div>
        <div
          className={cn(
            'countdown-minutes',
            'w-40 h-40 border-2 rounded-md bg-black font-mono text-4xl flex flex-col items-center justify-center text-white',
          )}
        >
          <span>00</span>
          <span>Minutes</span>
        </div>
        <div
          className={cn(
            'countdown-seconds',
            'w-40 h-40 border-2 rounded-md bg-black font-mono text-4xl flex flex-col items-center justify-center text-white',
          )}
        >
          <span>00</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
