import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { RxTimer } from "react-icons/rx";

import TimerSettings, { BasicSettings } from './Timer.settings';

export default {
  craft: {
    displayName: 'Timer',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(TimerSettings, BasicSettings),
    },
  },
  info: {
    displayName: 'Timer',
    exposed: true,
    icon: RxTimer,
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
      accept: ['string'],
    },
  },
  defaultProps: {
    style:{
      width:'fit-content'
    }
  },
} as T4DComponentConfig<ITimerProps>;

export interface ITimerProps extends webforms.ComponentProps {
}
