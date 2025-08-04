import {messages} from "./messages";

localStorage.setItem('randomMessage','messages[randomIndex]')

export function getRandomMessage(){

    const savedMessage=localStorage.getItem("resultMessage");
    if(savedMessage){
        return savedMessage;
    }
    const randomIndex = Math.floor(Math.random()*messages.length);
    const newMessage= messages[randomIndex];

    localStorage.setItem("resultMessage",newMessage);

    return newMessage;

}
