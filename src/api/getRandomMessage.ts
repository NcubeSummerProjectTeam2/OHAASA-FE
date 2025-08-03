import {messages} from "./messages";

export function getRandomMessage(){
    const randomIndex = Math.floor(Math.random()*messages.length);
    return messages[randomIndex];
}