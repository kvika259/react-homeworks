import StatusBadge from './StatusBadge'
import Card from './Card'

function UserCard({ name, role, experience, location, isAvailable }) {
  return (
    <>
      <Card>
        <h4>{name}</h4>
        <h5>{role}</h5>
        <p>Опыт: {experience} года</p>
        <p>
          {location.city}, {location.country}
        </p>
      </Card>
      <StatusBadge isAvailable={isAvailable} />
    </>
  )
}

export default UserCard
