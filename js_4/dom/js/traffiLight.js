const showTrafficLight = () => {
  document.getElementById('js-traffic-lights').classList.toggle('show');
};

const changeLight = () => {
  if (document.getElementById('js-green').classList.contains('light--green')) {
    document.getElementById('js-green').classList.remove('light--green');
    document.getElementById('js-yellow').classList.add('light--yellow');
  } else if (document.getElementById('js-yellow').classList.contains('light--yellow')) {
    document.getElementById('js-yellow').classList.remove('light--yellow');
    document.getElementById('js-red').classList.add('light--red');
  } else if (document.getElementById('js-red').classList.contains('light--red')) {
    document.getElementById('js-red').classList.remove('light--red');
    document.getElementById('js-green').classList.add('light--green');
  }
};

export { showTrafficLight , changeLight};
