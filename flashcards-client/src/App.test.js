import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Login from './Login';
import Main from './Main';

describe('App', () => {
  let wrapper;

  describe('without a token param', () => {
    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it('renders a Login view', () => {
      expect(wrapper.find(Login)).toHaveLength(1);
    });

    it('does not render a Main view', () => {
      expect(wrapper.find(Main)).toHaveLength(0);
    });
  });

  describe('with a token param', () => {
    beforeEach(() => {
      wrapper = shallow(<App />);
      wrapper.setState({token: 'foobar'});
    });

    it('does not render a Login view', () => {
      expect(wrapper.find(Login)).toHaveLength(0);
    });

    it('renders a Main view', () => {
      expect(wrapper.find(Main)).toHaveLength(1);
    });
  });
});
