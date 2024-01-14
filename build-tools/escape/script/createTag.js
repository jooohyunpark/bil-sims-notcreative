/* eslint-disable */
const createScript = src => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  return script;
};
const createLink = href => {
  const link = document.createElement('LINK');
  link.rel = 'stylesheet';
  link.href = href;
  return link;
};
const createDiv = id => {
  const div = document.createElement('div');
  div.id = id;
  return div;
};
/* eslint-disable */
