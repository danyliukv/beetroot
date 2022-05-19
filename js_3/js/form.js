const registration = (e) => {
  e.preventDefault();

  const form = new FormData(e.target);
  console.log(form);
};

export { registration };
