import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import Filter from './filter';

const mockStore = configureMockStore();
const store = mockStore({
    keyword: "",
    handle: "",
    statuses: [
        "RT @agodgmt: GOLDEN🏅MONEY💲TEAM 🤝 PRESENTS\n📺YOUTUBE📺 🚨ALERT🚨Subscribe to @TrillWillIsrael YouTube Channel\n.\n.\n.\n#goldenmoneyteam #agodgmt #1…",
        "RT @agodgmt: Golden🏅 Money💲Team 🤝 Presents\n🎶GOOD MUSIC🎶🚨ALERT🚨\n@TrillWillIsrael - Come Get It\n.\n.\n#goldenmoneyteam #AgodGmt #VueJS  #100Day…",
        "RT @agodgmt: Golden🏅 Money💲Team 🤝 Presents\n💲GRIND MUSIC💲🚨ALERT🚨\n@TrillWillIsrael - Lay Low \n.\n.\n#goldenmoneyteam #AgodGmt #VueJS 💲 #100Days…"
    ]
});

describe('basic Filter component', () => {
    it('should render a placeholder', () => {
        const wrapper = shallow(<Provider store={store}><Filter /></Provider>);
        //expect(wrapper.find('.filter-input').at(0).props().placeholder).toEqual("keyword");
        //todo: wire up mockStore to ensure proper rendering of component
    });


});