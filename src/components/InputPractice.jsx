function InputPractice() {
  const handleDown = (e) => {
    if (e.key == 'Enter') {
      console.log('Нажат Enter')
    }
  }
  return (
    <input
      onChange={(e) => console.log(e.target.value)}
      onFocus={() => console.log('Поле получило фокус')}
      onBlur={() => console.log('Поле потеряло фокус')}
      onKeyDown={handleDown}
    />
  )
}

export default InputPractice
