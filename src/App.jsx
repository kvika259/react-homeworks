import ActionButton from './components/ActionButton'
import ClickPractice from './components/ClickPractice'
import FormPractice from './components/FormPractice'
import InputPractice from './components/InputPractice'

function App() {
  return (
    <>
      <ClickPractice />
      <InputPractice />
      <FormPractice />
      <ActionButton text={'Сохранить'} fn={() => console.log('Сохранено')} />
      <ActionButton text={'Удалить'} fn={() => console.log('Удалено')} />
    </>
  )
}

export default App
