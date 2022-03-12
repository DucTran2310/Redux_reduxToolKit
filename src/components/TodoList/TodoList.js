import { Button, Col, Input, Row, Select, Tag } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../../redux/actions';
import { todosRemainingSelector } from '../../redux/selector';
import Todo from '../Todo/Todo';


const TodoList = () => {
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('High');

  const todoList = useSelector(todosRemainingSelector);
  // console.log(todoList, searchText);

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo({
      id: uuidv4(),
      name: todoName,
      priority: priority,
      completed: false
    })
    );
    // clear sau khi add
    setTodoName('');
    setPriority('High');

  }

  const handleTextChange = (e) => {
    setTodoName(e.target.value)
  }

  const handlePriorityChange = (value) => {
    setPriority(value);
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100%-40px)', overflowY: 'auto' }}>
        {/* <Todo name="Redux toolkit" priority='High' />
        <Todo name="Redux thunk" priority='Medium' />
        <Todo name="Redux saga" priority='Low' /> */}
        {todoList.map(todo =>
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} >
          <Input value={todoName} onChange={handleTextChange} />
          <Select defaultValue="High" onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  )
}

export default TodoList