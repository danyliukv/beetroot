const usersList = [
  {
    id: '1',
    name: 'Anna',
    lastName: 'Yuong',
    age: '22',
  },
  {
    id: '2',
    name: 'Vlad',
    lastName: 'Yuong',
    age: '66',
  },
  {
    id: '3',
    name: 'Olexander',
    lastName: 'Yuong',
    age: '55',
  },
  {
    id: '4',
    name: 'Yanna',
    lastName: 'Yuong',
    age: '44',
  },
  {
    id: '5',
    name: 'Sasha',
    lastName: 'Yuong',
    age: '18',
  },
];

const createElList = (className) => document.getElementsByClassName(className);

const createUserTable = (userList) => {
  const tbody = document.createElement('tbody');
  tbody.id = 'js-tbody';
  document.getElementById('js-table').appendChild(tbody);
  userList.forEach((element) => {
    let tr = document.createElement('tr');
    Object.values(element).forEach((item) => {
      let th = document.createElement('th');
      th.innerHTML = item;
      tr.appendChild(th);
    });
    document.getElementById('js-tbody').appendChild(tr);
  });
};

createUserTable(usersList);

const createSortedTable = (e) => {
  let sortedList = [];
  let target = e.target;
  if (target.tagName == 'TH') {
    switch (target.innerHTML) {
      case 'ID:': {
        sortedList = usersList.sort((a, b) => {
          if (a.id > b.id) {
            return 1;
          }
          if (a.id < b.id) {
            return -1;
          }
          return 0;
        });
        document.getElementById('js-tbody').remove();
        createUserTable(sortedList);
        break;
      }
      case 'Name:': {
        sortedList = usersList.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
        document.getElementById('js-tbody').remove();
        createUserTable(sortedList);
        break;
      }
      case 'Last Name:': {
        sortedList = usersList.sort((a, b) => {
          if (a.lastName > b.lastName) {
            return 1;
          }
          if (a.lastName < b.lastName) {
            return -1;
          }
          return 0;
        });
        document.getElementById('js-tbody').remove();
        createUserTable(sortedList);
        break;
      }
      case 'Age:': {
        sortedList = usersList.sort((a, b) => {
          if (a.age > b.age) {
            return 1;
          }
          if (a.age < b.age) {
            return -1;
          }
          return 0;
        });
        document.getElementById('js-tbody').remove();
        createUserTable(sortedList);
        break;
      }
    }
  }
};

document.getElementById('js-table').addEventListener('click', createSortedTable);
