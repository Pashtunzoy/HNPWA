import { h, Component } from 'preact';
import Topics from '../components/topics';
import { Link } from 'preact-router/match';
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow, deep } from 'preact-render-spy';

describe('Initial Test of the Topics', () => {
	const data = JSON.parse(
		`"[{"id":17178192,"title":"Middle name initials enhance evaluations of intellectual performance","points":16,"user":"dmichulke","time":1527594032,"time_ago":"33 minutes ago","comments_count":3,"type":"link","url":"https://onlinelibrary.wiley.com/doi/abs/10.1002/ejsp.2026","domain":"onlinelibrary.wiley.com"},{"id":17176713,"title":"A New Fast Hash Table, in Response to Google's New Fast Hashtable","points":157,"user":"chewxy","time":1527571602,"time_ago":"7 hours ago","comments_count":20,"type":"link","url":"https://probablydance.com/2018/05/28/a-new-fast-hash-table-in-response-to-googles-new-fast-hash-table/","domain":"probablydance.com"},{"id":17177518,"title":"Pwned Passwords in Practice: Real World Examples of Blocking the Worst Passwords","points":36,"user":"robin_reala","time":1527584446,"time_ago":"3 hours ago","comments_count":8,"type":"link","url":"https://www.troyhunt.com/pwned-passwords-in-practice-real-world-examples-of-blocking-the-worst-passwords/","domain":"troyhunt.com"},{"id":17177865,"title":"Challenges in Large FPGA-Based Logic Emulation Systems","points":11,"user":"godelmachine","time":1527589111,"time_ago":"2 hours ago","comments_count":1,"type":"link","url":"https://dl.acm.org/citation.cfm?id=3177542","domain":"dl.acm.org"},{"id":17177817,"title":"So Your Startup Receive the Nightmare GDPR Letter","points":120,"user":"janvdberg","time":1527588413,"time_ago":"2 hours ago","comments_count":93,"type":"link","url":"https://jacquesmattheij.com/so-your-start-up-receive-the-nightmare-gdpr-letter","domain":"jacquesmattheij.com"}]"
  `);
  
	test('Topics renders initial', () => {
		const context = shallow( <Topics /> );
		expect(context.find('div').contains('ul').contains('span')).toBeTruthy();
		expect(context.find('div').contains('ul').contains('a')).toBeTruthy();
	});
  
});