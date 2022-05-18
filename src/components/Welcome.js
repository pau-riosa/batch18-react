function getGreeting(data) {
  if (data) return <h1>Hello, {data.name.toUpperCase()}!</h1>;
  return <h1>Hello, Stranger.</h1>;
}

export default function Welcome(props) {
  return <>{getGreeting(props.data)}</>;
}
