function ChildComponent({ name = 'дорогой друг', counter }) {
  return (
    <p>
      Привет, {name}! Текущий счётчик: {counter}
    </p>
  )
}

export default ChildComponent
