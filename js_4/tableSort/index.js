const createElList = (className) => document.getElementsByClassName(className);

const sortTable = (e) => {
  let target = e.target;
  // console.log(target.innerHTML);
  if (target.tagName == 'TH') {
    const elValuelist = [];

    switch (target.innerHTML) {
      case 'ID:': {
        const list = createElList('js-id');
        for (const item of list) {
          console.log(item.innerHTML);
        }
        break;
      }
      case 'Name:': {
        const list = createElList('js-name');
        for (const item of list) {
          console.log(item.innerHTML);
        }
        break;
      }
      case 'Last Name:': {
        const list = createElList('js-last-name');
        for (const item of list) {
          console.log(item.innerHTML);
        }
        break;
      }
      case 'Age:': {
        const list = createElList('js-age');
        for (const item of list) {
          elValuelist.push(parseInt(item.innerHTML));
        }
        elValuelist.sort();
        console.log(elValuelist);
        break;
      }
    }
  }
};

document.getElementById('js-table').addEventListener('click', sortTable);
