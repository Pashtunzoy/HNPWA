import { h, Component } from 'preact';
import Header from '../components/topics';
import { Link } from 'preact-router/match';
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow, deep } from 'preact-render-spy';

describe('Initial Test of the Topics', () => {

    test('Topics renders initial', () => {
        const context = shallow(<Topics />);
        // expect(context.find('h1').text()).toBe('Preact App');
        // expect(context.find(<Link />).length).toBe(3);
    });
});