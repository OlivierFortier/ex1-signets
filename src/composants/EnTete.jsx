
export default function EnTete({utilisateur}) {
  const img = 'https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&dpr=2&h=30&w=30'
  return (
    <header>
      <nav>Signets</nav>
      <nav>
        <span>{utilisateur}</span>
        <img src={img} alt="avatar utilisateur" />
      </nav>
    </header>
  );
}
