import "./Chat.css"
import { useState } from "react";
import getMessages from "../Data/getMessages";
import MessageItem from "../Components/MessageItem";
import DateObject from "react-date-object";

function Chat() {

    const [messages, setMessages] = useState(getMessages())
    const [newUsername, setNewUsername] = useState('')
    const [newMessageText, setNewMessageText] = useState('')
    const [usernameError, setUsernameError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const addNewMessage = () => {

        if (newUsername == "") {
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }

        if (newMessageText == "") {
            setMessageError(true);
        } else {
            setMessageError(false);
        }

        if (newUsername == "" || newMessageText == "") {
            return;
        }

        const actualDate = new DateObject();

        const newMessage = {
            date: actualDate.format("DD.MM.YYYY HH:mm"),
            username: newUsername,
            text: newMessageText,
        }
        setMessages([newMessage, ...messages])
        setNewMessageText('')
    }

    const messagesList = messages.map((message, index) => {
        return <MessageItem
            key={index}
            message={message}
        />
    }
    )

    return (
        <div>
            <div>
                <div className="mt-0 mb-4 top-block">
                    <div className="container">
                        <div className="row pt-1 mb-3 mt-2">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a className="link-none cart-breadcrumb-item" href="/">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Chat</li>
                                </ol>
                            </nav>
                        </div>
                        <p className="display-5">Chat</p>
                        <div className="title-line"></div>
                    </div>
                </div>
                <div className="container container-height">
                    <div className="col-md" id="chat-window">
                        <div className="row">
                            <div className="col" id="messages-column">
                                {messagesList}
                            </div>
                        </div>
                        <div className="row" id="input-row">
                            <div className="col">
                                <div className="row px-4 pt-3 input-username">
                                    <label>Username:</label>
                                    <input type="text" value={newUsername} onChange={(event) => setNewUsername(event.target.value)} className="form-control" />
                                    <div className="form-text chat-error" style={{ display: usernameError ? "block" : "none" }}>Please insert username</div>
                                </div>
                                <div className="row px-4">
                                    <label>Message:</label>
                                    <textarea value={newMessageText} onChange={(event) => setNewMessageText(event.target.value)} className="form-control" rows="3"></textarea>
                                    <div className="form-text chat-error" style={{ display: messageError ? "block" : "none" }}>Please insert message</div>
                                </div>
                                <div className="row px-4">
                                    <button onClick={addNewMessage} className="btn btn-dark mt-3 mb-3 chat-button">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Chat;