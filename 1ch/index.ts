import axios from 'axios';

interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

axios('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
	const data = response.data as Todo;
	const { id, title, completed } = data;

	logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) =>
	console.log(id, title, completed);

// tsc index.ts => node index.js
// ts-node index.ts
