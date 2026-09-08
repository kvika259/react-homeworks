import { useState } from 'react'

function LiveInput() {
  const [text, setText] = useState('')
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

export default LiveInput
