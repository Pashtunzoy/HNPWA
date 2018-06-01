import { h, Component } from 'preact';
import 'isomorphic-fetch';
import Comments from '../components/topics/comments';
import { Link } from 'preact-router/match';
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'preact-render-spy';

describe('Initial Test of the Comments', () => {
    test('Comments renders lists', () => {
        const context = shallow(<Comments />);
        // expect(context.find('h1').text()).toBe('Preact App');
        expect(context.find('section').contains('header').contains('h1').text()).toBeTruthy();
        // expect(context.find(<Link />).length).toBe(3);
    });
});