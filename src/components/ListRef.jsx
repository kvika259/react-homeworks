function ListRef({ arr, setArr }) {
  const handleClick = (id) => {
    setArr((prev) =>
      [...prev].map((item, index) => (index == id ? item + '!!!' : item))
    )
  }
  return (
    <ol>
      {arr.map((item, index) => (
        <li key={index}>
          {item} <button onClick={() => handleClick(index)}>!!!</button>
        </li>
      ))}
    </ol>
  )
}

export default ListRef
