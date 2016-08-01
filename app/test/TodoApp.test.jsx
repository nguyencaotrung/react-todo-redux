var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery')

var TodoApp = require('TodoApp');

describe('TodoApp',() => {
	it('should exists',() => {
		expect(TodoApp).toExist();
	});

	it('should add todo to the to do state on handleTodo()',()=>{
		var todoText = 'test text';
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({todos: []});
		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);
	});

	it('should toggle completed value when handleToggle called',()=>{
		var todoData = {
			id: 11,
			text: "text features",
			completed: false,
			createdAt: 0,
			completedAt: undefined
		};

		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos: [todoData]});
		
		expect(todoApp.state.todos[0].completed).toBe(false);
		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(true);
	});

	it('should expect createdAt to be a number',()=>{
		var todoData = {
			id: 11,
			text: "text features",
			completed: false,
			createdAt: 0,
			completedAt: undefined
		};

		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos: [todoData]});
		
		expect(todoApp.state.todos[0].createdAt).toBeA('number');
		
	});

	it('should expect completedAt to be a number',()=>{
		var todoData = {
			id: 11,
			text: "text features",
			completed: false,
			createdAt: 0,
			completedAt: undefined
		};

		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos: [todoData]});
		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completedAt).toBeA('number');
		
	});

	it('should test that when toggle from true to false, completedAt get removed',()=>{
		var todoData = {
			id: 11,
			text: "text features",
			completed: true,
			createdAt: 0,
			completedAt: 10
		};

		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos: [todoData]});

		expect(todoApp.state.todos[0].completed).toBe(true);
		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(false);
		expect(todoApp.state.todos[0].completedAt).toNotExist();
		
	});



});