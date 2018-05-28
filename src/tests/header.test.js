import { h, Component } from 'preact';
import Header from '../components/header';
import { Link } from 'preact-router/match';
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow, deep } from 'preact-render-spy';

describe('Initial Test of the Header', () => {
    test('Header renders 3 nav items', () => {
        const context = shallow(<Header />);
        expect(context.find('span')[0].text()).toBe('HN');
        expect(context.find('span')[1].text()).toBe('Hacker News');
        expect(context.find(<Link />).length).toBe(5);
    });
});