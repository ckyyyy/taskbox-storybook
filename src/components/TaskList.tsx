import { FC } from 'react';

import Task from './Task';
import { TaskItem } from '../types/Task';

import { connect } from 'react-redux';
import { archiveTask, pinTask } from '../lib/redux';

export interface TaskListProps {
  loading?: boolean;
  tasks: TaskItem[];
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}

export const PureTaskList: FC<TaskListProps> = ({
  loading = false,
  tasks,
  onArchiveTask,
  onPinTask,
}) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  const tasksInOrder = [
    ...tasks.filter((t) => t.state === 'TASK_PINNED'),
    ...tasks.filter((t) => t.state !== 'TASK_PINNED'),
  ];

  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  return (
    <div className="list-items">
      {tasksInOrder.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};

export default connect(
  ({ tasks }: TaskListProps) => ({
    tasks: tasks.filter(
      (t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    ),
  }),
  (dispatch) => ({
    onArchiveTask: (id: string) => dispatch(archiveTask(id)),
    onPinTask: (id: string) => dispatch(pinTask(id)),
  })
  // @ts-ignore
)(PureTaskList);
