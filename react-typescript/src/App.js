import React from "react"
import { useCallback } from "react";
import logo from './logo.svg';
import './App.css';

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    padding: "1rem",
    fontWeight: "bold"
  }} >{children}</div>
)

const List: React.FunctionComponent<{
  items:string[],
  onClick?: (item: string) => void
}> = ({items, onClick}) => (
  <ul>
    {items.map(it => (
      <li key={it} onClick={()=> onClick?.(it)}>{it}</li>
    ))}
  </ul>
)
function App() {
  const onListClick = useCallback((item:string) => {
    alert(item)
  },[])
  return (
    <div className="App">
      <Heading title="Introduction"></Heading>
      <Box> test children</Box>
      <List items={["one", "two", "three"]} onClick={onListClick}/>
    </div>
  );
}

export default App;
