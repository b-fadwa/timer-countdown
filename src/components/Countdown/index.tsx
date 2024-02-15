import config, { ICountdownProps } from './Countdown.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './Countdown.build';
import Render from './Countdown.render';

const Countdown: T4DComponent<ICountdownProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

Countdown.craft = config.craft;
Countdown.info = config.info;
Countdown.defaultProps = config.defaultProps;

export default Countdown;
