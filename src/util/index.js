const loadAUI = () => {
  if (!window.DA_adlp) {
    const { head } = document;
    const link = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href =
      'https://images-na.ssl-images-amazon.com/images/I/11EIQ5IGqaL._RC|012LjolmrML.css,41-crZfIjzL.css,11cMnOipjJL.css,017DsKjNQJL.css,01Vctty9pOL.css,01CH1pCmYCL.css,41EWOOlBJ9L.css,11PIM2x8KnL.css,01ElnPiDxWL.css,11QxHU4QYaL.css,01Sp8sB1HiL.css,01IdKcBuAdL.css,01y-XAlI+2L.css,01evdoiemkL.css,01K+Ps1DeEL.css,314djKvMsUL.css,01ZTetsDh7L.css,01pbA9Lg3yL.css,21LK7jaicML.css,11L58Qpo0GL.css,21kyTi1FabL.css,01ruG+gDPFL.css,01YhS3Cs-hL.css,21GwE3cR-yL.css,11KLBtpWIAL.css,119I1lTJONL.css,11M4XwS6hxL.css,11WgRxUdJRL.css,01dU8+SPlFL.css,11ocrgKoE-L.css,11k89RclloL.css,111-D2qRjiL.css,01QrWuRrZ-L.css,21xBJi4P1GL.css,01M3ZzSySfL.css,01gAR5pB+IL.css,119dKrtBoVL.css,01piEq-AdwL.css,11Z1a0FxSIL.css,01cbS3UK11L.css,21B5OR-vv2L.css,01giMEP+djL.css_.css?AUIClients/AmazonUI&Gh4Vf2Dd#us.not-trident.282109-T1.263677-T1.278290-T1';

    if (head) {
      head.prepend(link);
    }
  }
};

const injectMASH = () => {
  const { head } = document;
  const scriptTag = document.createElement('script');

  scriptTag.src = 'https://m.media-amazon.com/images/I/41Iq-3h7GPL.js';

  if (head) {
    head.prepend(scriptTag);
  }
};

const transformAsinList = asinList => Object.keys(asinList);

const getRandomInt = (min = -3, max = 3) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};

module.exports = { loadAUI, injectMASH, transformAsinList, getRandomInt };
