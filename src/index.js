import { ChakraProvider, theme } from "@chakra-ui/react";
import { Provider } from 'react-redux'
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from './components/redux/store'
import 'normalize.css'

ReactDOM.render(
    <ChakraProvider theme={theme}>
        <Provider store={ store }>
        <App />
        </Provider>
    </ChakraProvider>,
    document.getElementById("root")
);
