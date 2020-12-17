import { restart } from "../render";

const stat = {


  namesParticipants: [
    {
      name: "logName",
      id: 1,
    }

  ],
  login: (logName) => login(logName),

};

const id = (t) => {
  if (t.length !== 0) {
    return t[t.length - 1].id + 1;
  } else {
    return 0;
  }
};
const login = (logName) => {
  stat.namesParticipants.push({
    name: logName,
    id: id(stat.namesParticipants),
  });
  console.log('stat');
  return restart(stat);
};




export default stat;
