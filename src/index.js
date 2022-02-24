import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from 'react-redux'
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from './components/redux/store'

ReactDOM.render(
    <ChakraProvider>
        <Provider store={ store }>
        <App />
        </Provider>
    </ChakraProvider>,
    document.getElementById("root")
);
