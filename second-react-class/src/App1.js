import Wrapper from './Wrapper'

function App() {
  const items = [
    'something',
    'sombrero',
    'wholesome',
    'ransom',
    'apple',
    'react',
    'javascript',
    'python',
    'java',
    'springboot'
  ]
  return (
    <div>
      <h1>My Filtered List</h1>
      <Wrapper items={items} />
    </div>
  )
}

export default App
