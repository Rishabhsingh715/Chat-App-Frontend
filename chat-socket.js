const socket = io("http://localhost:3235");

const message = document.getElementById('message');
const message2 = document.getElementById('message2');
const messages = document.getElementById('messages');

const handleSubmitNewMessage = () => {
  socket.emit('message', { data: message.value })
}
const handleSubmitNewMessage2 = () => {
  socket.emit('user2message', { data: message2.value })
}

socket.on('message', ({ data }) => {
  console.log('1');

  handleNewMessage(data);
})
socket.on('user2message', ({ data }) => {
  console.log('2');
  handleNewMessage(data);
})

const handleNewMessage = (message) => {
  messages.appendChild(buildNewMessage(message));
}

const buildNewMessage = (message) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(message))
  return li;
}