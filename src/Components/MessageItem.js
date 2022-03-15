function MessageItem(props) {

    const { key, message } = props;

    return (
        <div key={key} className="messages-group-item">
            <div className="row px-4">
                <div className="col-md-2 chat-username">
                    <h5>{message.username}</h5>
                </div>
                <div className="col chat-date d-flex justify-content-end">{message.date}</div>
            </div>
            <div className="row px-4 chat-message">
                <div className="col">{message.text}</div>
            </div>
        </div>
    )
}

export default MessageItem;