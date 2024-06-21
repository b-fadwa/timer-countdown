import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { PiClockCountdownBold } from 'react-icons/pi';

import CountdownSettings, { BasicSettings } from './Countdown.settings';

export default {
  craft: {
    displayName: 'Countdown',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(CountdownSettings, BasicSettings),
    },
  },
  info: {
    displayName: 'Countdown',
    exposed: true,
    icon: PiClockCountdownBold,
    events: [
      {
        label: 'On Click',
        value: 'onclick',
      },
      {
        label: 'On Blur',
        value: 'onblur',
      },
      {
        label: 'On Focus',
        value: 'onfocus',
      },
      {
        label: 'On MouseEnter',
        value: 'onmouseenter',
      },
      {
        label: 'On MouseLeave',
        value: 'onmouseleave',
      },
      {
        label: 'On KeyDown',
        value: 'onkeydown',
      },
      {
        label: 'On KeyUp',
        value: 'onkeyup',
      },
    ],
    datasources: {
      accept: ['date'],
    },
  },
  defaultProps: {
    style: {
      width: 'fit-content',
    },
  },
} as T4DComponentConfig<ICountdownProps>;

export interface ICountdownProps extends webforms.ComponentProps {
  header: string;
}
