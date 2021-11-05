import { createStore } from 'redux';
import './App.css';
import todoReducer from './reducers/todoReducer';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import HelpPage from './components/HelpPage';
import { Switch } from 'react-router';
import { Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import DoneTodoList from './components/DoneTodoList'
import NotFoundPage from './components/NotFoundPage';
import {Layout} from 'antd';
import {PageHeader, Descriptions} from 'antd';

const {Footer } = Layout;


function App() {
  const store = createStore(todoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
  // Switch: only return exact one page related to path, and exclusive
  return (
    
    <div className="App">
      
      <PageHeader className='pageHeader'>
      
      <Descriptions size="small" column={2}>
        
        <Descriptions.Item label="Date">4 November 2021</Descriptions.Item>
        <Descriptions.Item label="Creator">Tommy Cheung</Descriptions.Item>
        <Descriptions.Item label="Time">09:00</Descriptions.Item>
        <Descriptions.Item label="Todo status">?/?</Descriptions.Item>
        
      </Descriptions>
    </PageHeader>

        <Link to='/'>Home </Link>
        <Link className='link' to='help'> Help </Link>
        <Link className='link' to='done'> Finished Todo </Link>
        <Provider store={store}>
          <Switch>
            <Route exact path='/' component={TodoList}></Route>
            <Route path='/help' component={HelpPage}></Route>
            <Route path='/done' component={DoneTodoList}></Route>
            <Route path='*' component={NotFoundPage}></Route>
          </Switch>
        </Provider>
        <Footer style={{ textAlign: 'center' }}>Todo List developed by React-Redux by Tommy Cheung @ Agile Extreme Lab Ltd</Footer>
    </div>
  );
}

export default App;