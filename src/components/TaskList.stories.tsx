import { Story } from '@storybook/react/types-6-0';
import { TaskListProps, PureTaskList } from './TaskList';
import * as TaskStories from './Task.stories';

export default {
  component: PureTaskList,
  title: 'TaskList',
  decorators: [
    (story: any) => <div style={{ padding: '3rem' }}>{story()}</div>,
  ],
};

const Template: Story<TaskListProps> = (args) => <PureTaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    {
      ...TaskStories?.Default?.args?.task,
      id: '1',
      title: 'Task 1',
      state: 'TASK_INBOX',
    },
    {
      ...TaskStories?.Default?.args?.task,
      id: '2',
      title: 'Task 2',
      state: 'TASK_INBOX',
    },
    {
      ...TaskStories?.Default?.args?.task,
      id: '3',
      title: 'Task 3',
      state: 'TASK_INBOX',
    },
    {
      ...TaskStories?.Default?.args?.task,
      id: '4',
      title: 'Task 4',
      state: 'TASK_INBOX',
    },
    {
      ...TaskStories?.Default?.args?.task,
      id: '5',
      title: 'Task 5',
      state: 'TASK_INBOX',
    },
    {
      ...TaskStories?.Default?.args?.task,
      id: '6',
      title: 'Task 6',
      state: 'TASK_INBOX',
    },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    {
      ...TaskStories?.Default?.args?.task,
      id: '1',
      title: 'Task 1',
      state: 'TASK_INBOX',
    },
    {
      ...TaskStories?.Default?.args?.task,
      id: '2',
      title: 'Task 2',
      state: 'TASK_INBOX',
    },
    {
      ...TaskStories?.Default?.args?.task,
      id: '3',
      title: 'Task 3',
      state: 'TASK_INBOX',
    },
    {
      ...TaskStories?.Default?.args?.task,
      id: '4',
      title: 'Task 4',
      state: 'TASK_INBOX',
    },
    {
      ...TaskStories?.Default?.args?.task,
      id: '5',
      title: 'Task 5',
      state: 'TASK_INBOX',
    },
    {
      ...TaskStories?.Default?.args?.task,
      id: '6',
      title: 'Task 6',
      state: 'TASK_INBOX',
    },
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
};
