import { h, Component } from 'preact';
import Header from '../components/topics';
import { Link } from 'preact-router/match';
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow, deep } from 'preact-render-spy';

describe('Initial Test of the Topics', () => {

    test('Topics renders initial', () => {
        const context = shallow(<Topics />);
        expect(context.find('div').contains('ul').contains('span')).toBeTruthy();
        expect(context.find('div').contains('ul').contains('a')).toBeTruthy();
    });
});