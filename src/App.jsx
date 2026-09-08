import UserCard from './components/UserCard'

function App() {
  return (
    <>
      <UserCard
        name="Павел"
        role="Frontend-разработчик"
        experience={3}
        location={{ city: 'Минск', country: 'Беларусь' }}
        isAvailable={true}
      />
      <UserCard
        name="Оля"
        role="Аналитик"
        experience={1}
        location={{ city: 'Брест', country: 'Беларусь' }}
        isAvailable={true}
      />
      <UserCard
        name="Вика"
        role="Ученик"
        experience={0}
        location={{ city: 'Минск', country: 'Беларусь' }}
        isAvailable={false}
      />
    </>
  )
}

export default App
