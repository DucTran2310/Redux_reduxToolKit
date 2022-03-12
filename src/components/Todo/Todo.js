import { Checkbox, Row, Tag } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import todoListSlices from '../TodoList/todosSlice';

const priorityColor = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
}

const Todo = ({ name, priority, completed, id }) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(completed);

  const toggleCheck = () => {
    setChecked(!checked);
    dispatch(todoListSlices.actions.toggleTodoStatus(id));
  }

  return (
    <Row justify="space-between"
      style={{
        marginBottom: 5,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {})
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheck}>
        {name}
      </Checkbox>
      <Tag color={priorityColor[priority]}>
        {priority}
      </Tag>
    </Row>
  )
}

export default Todo