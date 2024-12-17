import reactLogo from './assets/react.svg';
import './App.css';
import { useQuery } from './lib/wundergraph';
import React from "react";

const Dragons: React.FC = () => {
	const { data, error, isLoading } = useQuery({
		operationName: 'spacex/Dragons',
	});
	return (
		<div>
			{isLoading && <p>Loading...</p>}
			{error && <p>Error: {JSON.stringify(error, null, 2)}</p>}
			{data && (
				<pre>
					<p>{JSON.stringify(data, null, 4)}</p>
				</pre>
			)}
		</div>
	);
};

function App() {
	return (
		<div className="App">
			<div>
				<a href="https://wundergraph.com" target="_blank" rel="noreferrer">
					<img src="/wundergraph.svg" className="logo wundergraph" alt="WunderGraph logo" />
				</a>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>WunderGraph + Vite + React</h1>
			<div className="card">
				<Dragons />
			</div>
			<p className="read-the-docs">Click on the WunderGraph, Vite and React logos to learn more</p>
		</div>
	);
}

export default App;