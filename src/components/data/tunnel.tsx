import { h } from '@stencil/core';
import { createProviderConsumer } from '@stencil/state-tunnel';

export interface State {
  test: string;
}

export default createProviderConsumer<State>(
  {
    test: null,
  },
  (subscribe, child) => <context-consumer subscribe={subscribe} renderer={child} />,
);
