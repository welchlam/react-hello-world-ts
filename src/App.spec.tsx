import React from 'react';
import App from './App';

import { Provider } from 'react-redux';
import stores from './redux/reducer';
import {createStore} from "redux";
import configureStore from 'redux-mock-store';
import {mount} from "enzyme";

describe('App.tsx', () => {
  const defaultStore = createStore(stores).getState();

  it('should render the header', () => {
    const mockStore = configureStore([])({...defaultStore})
    const wrapper = mount(
      <Provider store={mockStore}>
        <App/>
      </Provider>
    );

    const header = wrapper.find('.header');
    console.log(header.html());
    expect(
        header.find('.nav--features--feature')
            .find('li')
            .at(0)
            .find('div')
            .find('a')
            .text()
    ).toEqual('Button1');
  })
});
