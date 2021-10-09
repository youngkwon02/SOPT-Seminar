const members = require("./members");

const getOnline = members => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter(o => o.location === "online");
      resolve(data);
    }, 500);
  });
};

const getOffline = members => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter(o => o.location === "offline");
      resolve(data);
    }, 500);
  });
};

const getYB = members => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter(o => o.group === "YB");
      resolve(data);
    }, 500);
  });
};

const getOB = members => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter(o => o.group === "OB");
      resolve(data);
    }, 500);
  });
};


const asyncOnlineOB = async (members) => {
  const onlineMembers = await getOnline(members);
  const onlineObMembers = await getOB(onlineMembers);
  console.log(onlineObMembers);
}

const asyncOfflineYB = async (members) => {
  const offlineMembers = await getOffline(members);
  const offlineYbMembers = await getYB(offlineMembers);
  console.log(offlineYbMembers);
}

asyncOnlineOB(members);
asyncOfflineYB(members);