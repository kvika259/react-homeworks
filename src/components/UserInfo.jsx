import React from 'react'

const UserInfo = React.memo(
  ({ user }) => {
    console.log('Render UserInfo')
    return (
      <div>
        <p>Имя: {user.name}</p>
        <p>Возраст: {user.age}</p>
        <p>Активен: {user.isActive ? 'Активен' : 'Неактивен'}</p>
      </div>
    )
  },
  (prevProps, nextProps) => {
    return (
      prevProps.user.name === nextProps.user.name &&
      prevProps.user.age === nextProps.user.age &&
      prevProps.user.isActive === nextProps.user.isActive
    )
  }
)

export default UserInfo
