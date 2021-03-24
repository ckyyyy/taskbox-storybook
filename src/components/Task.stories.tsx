import { Meta, Story } from '@storybook/react/types-6-0';
import Task, { TaskProps } from './Task';

export default {
  component: Task,
  title: 'Task',
} as Meta;

const Template: Story<TaskProps> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_PINNED',
    ...Default.args.task,
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_ARCHIVED',
    ...Default.args.task,
  },
};
