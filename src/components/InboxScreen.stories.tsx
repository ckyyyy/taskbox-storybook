import React from 'react';
import { Provider } from 'react-redux';
import { Story } from '@storybook/react/types-6-0';

import { PureInboxScreen, InboxScreenProps } from './InboxScreen';

import { action } from '@storybook/addon-actions';

import * as TaskListStories from './TaskList.stories';

// A super-simple mock of a redux store
const store = {
  getState: () => {
    return {
      //@ts-ignore
      tasks: TaskListStories.Default.args.tasks,
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

export default {
  component: PureInboxScreen,
  //@ts-ignore
  decorators: [(story: any) => <Provider store={store}>{story()}</Provider>],
  title: 'InboxScreen',
};

const Template: Story<InboxScreenProps> = (args) => (
  <PureInboxScreen {...args} />
);

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: 'Something',
};
