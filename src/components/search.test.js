import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import Search from './search';

const mockStore = configureMockStore();
const store = mockStore({});

describe('basic Search component', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Provider store={store}><Search /></Provider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});