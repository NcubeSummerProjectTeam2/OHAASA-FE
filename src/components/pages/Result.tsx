import {getRandomMessage} from "../../api/getRandomMessage";

export default function Result(){
    const message = getRandomMessage();
    return <p>{message}</p>
}