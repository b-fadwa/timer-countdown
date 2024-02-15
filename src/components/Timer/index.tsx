import config, { ITimerProps } from './Timer.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './Timer.build';
import Render from './Timer.render';

const Timer: T4DComponent<ITimerProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

Timer.craft = config.craft;
Timer.info = config.info;
Timer.defaultProps = config.defaultProps;

export default Timer;
