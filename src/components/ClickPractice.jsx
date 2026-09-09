function ClickPractice() {
  const handleClick = (event) => {
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(event.target.tagName)
    console.log(event.currentTarget.tagName)
  }

  //target - где событие произошло (лайк, текст или пустое пространство), currentTarget - где событие прописано (в данном случак кнопка)
  return (
    <button onClick={handleClick}>
      <span>👍</span>
      <span>Поставить лайк</span>
    </button>
  )
}

export default ClickPractice
