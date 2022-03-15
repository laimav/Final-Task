function ChatItem(props) {
    const { index, task, deleteTask, changeTaskState } = props

    const textDecoration = task.isCompleted ? 'line-through' : 'none'
    let deleteButton = ''
    if (task.isCompleted) {
        deleteButton = <button onClick={() => deleteTask(index)}>Delete</button>
    }

    return (

        <li>
            <input type="checkbox" checked={task.isCompleted} onChange={() => changeTaskState(index)}></input>
            <span style={{ textDecoration: textDecoration }}>{task.title}</span>
            {deleteButton}
        </li>

    )

}

export default ListItem;