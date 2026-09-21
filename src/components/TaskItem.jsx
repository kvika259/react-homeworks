import React from 'react'

const TaskItem = React.memo(({ item }) => {
  console.log(`Render ${item}`)
  return <li>{item}</li>
})

export default TaskItem
