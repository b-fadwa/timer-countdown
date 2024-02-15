import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC } from 'react';

import { ICountdownProps } from './Countdown.config';

const Countdown: FC<ICountdownProps> = ({ style, className, classNames = [] }) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <div className={cn('countdown-container', 'flex justify-center items-center space-x-4 ')}>
        <div
          className={cn(
            'countdown-days',
            'w-32 h-32 border-2 rounded-md border-red-600 font-mono text-2xl flex items-center',
          )}
        >
          00 days
        </div>
        <div
          className={cn(
            'countdown-hours',
            'w-32 h-32 border-2 rounded-md border-red-600 font-mono text-2xl flex items-center',
          )}
        >
          00 hours
        </div>
        <div
          className={cn(
            'countdown-minutes',
            'w-32 h-32 border-2 rounded-md border-red-600 font-mono text-2xl flex items-center',
          )}
        >
          00 minutes
        </div>
        <div
          className={cn(
            'countdown-seconds',
            'w-32 h-32 border-2 rounded-md border-red-600 font-mono text-2xl flex items-center',
          )}
        >
          00 seconds
        </div>
      </div>
    </div>
  );
};

export default Countdown;
