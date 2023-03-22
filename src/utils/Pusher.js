import Pusher from "pusher-js";

Pusher.logToConsole = true;

const pusher = new Pusher('e21b2fdbfe431899b6bb', {
  cluster: 'eu'
});

export default pusher;