import { Divider, Typography } from 'antd';
import './App.css';
import Filters from './components/Filters/Filters';
import TodoList from './components/TodoList/TodoList';

const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Title style={{ textAlign: 'center', fontSize: '36px' }}>TO DO APP WITH REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
