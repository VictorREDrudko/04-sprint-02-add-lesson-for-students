type MyComponentProps<T> = {
  items: T[]
  defaultItem: T
}

// function MyComponent<T>(props: MyComponentProps<T>) {
//   console.log(props)
//   return <p>some content</p>
// }

// Если использовать стрелочную функцию
const MyComponent = <T, >(props: MyComponentProps<T>) => {
  console.log(props)
  return <p>some content</p>
}

const App = () => {
  const users: User[] = [
    { name: 'Bilbo', age: 111 },
    { name: 'Frodo', age: 33 },
  ]

  return (
    <>
      {/* <MyComponent items={['react', 'typescript']} defaultItem={9} /> */}
      <MyComponent items={['react', 'typescript']} defaultItem={'9'} />
      {/* <MyComponent items={users} defaultItem={'JUST STRING'} /> */}
      <MyComponent items={users} defaultItem={{name: 'WWW', age: 0}} />
    </>
  )
}

type User = {
  name: string
  age: number
}
