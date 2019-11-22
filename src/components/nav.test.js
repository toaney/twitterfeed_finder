import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import Nav from './nav';

describe('basic Nav component', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><Nav /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
