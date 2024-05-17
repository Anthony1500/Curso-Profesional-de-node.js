const EventEmiter = require('events');

class ChatRoom extends EventEmiter{
    join(user) {
        console.log(`${user} joined the chat room`)
        this.emit('join',user)
    }

sendMessage(user,message){
    console.log(`${user} send a message: ${message} `)
        this.emit('message',user,message)
}
}
const chatRoom =new ChatRoom();
chatRoom.on('join',(user)=>{
    console.log(`Welcome user: ${user}`);
});

chatRoom.on('message',(user,message)=>{
    console.log(`New message from ${user}:${message}`);
});


chatRoom.join("Anthony");
chatRoom.join("Pedro");
chatRoom.sendMessage("Anthony","Hello all every one");
chatRoom.sendMessage("Pedro","Hi Anthony!!");