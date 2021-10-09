const members = require("./members");

const getOnline = members => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(members.filter(o => o.location === 'online'));
    }, 500);
  });
};

const getOffline = members => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(members.filter(o => o.location === 'offline'));
    }, 500);
  });
};

const getYB = members => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(members.filter(o => o.group === 'YB'));
    }, 500);
  });
};

const getOB = members => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(members.filter(o => o.group === 'OB'));
    }, 500);
  });
};

getOnline(members).then(getOB).then(console.log);
// getOnline(members)
//   .then(result => getOB(result))
//   .then(result => console.log(result);

getYB(members).then(getOffline).then(console.log);
// getYB(members)
//   .then(result => getOffline(result))
//   .then(result => console.log(result);