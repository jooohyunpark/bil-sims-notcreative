const React = require('react');
const Adapter = require('enzyme-adapter-react-16');
const { intl, shallow, render, mount, configure } = require('enzyme');

configure({ adapter: new Adapter() });

global.intl = intl;

global.shallow = shallow;

global.render = render;

global.mount = mount;
