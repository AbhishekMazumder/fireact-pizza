import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: yellow;
    font-family: 'Open Sans', sans-serif;
  }
  
  h1,h2, h3{
    font-family: 'Righteous', cursive;
  }
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<div className="App">
				<h1>Hello App</h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque aut nihil in, sed nemo ipsa quis, eius ad rerum quod voluptatibus quasi hic deleniti illo, maiores natus esse tempore culpa?
			</div>
		</>
	);
}

export default App;
