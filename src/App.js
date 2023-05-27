import Costs from "./components/Costs";

function App() {
  const costs = [
    {
      date: new Date(2023, 2, 12),
      description: "Refrigerator",
      amount: 999.99,
    },
    {
      date: new Date(2023, 2, 15),
      description: "MacBook",
      amount: 1254.23,
    },
    {
      date: new Date(2023, 2, 20),
      description: "Book",
      amount: 8.5,
    },
  ];
  return (
    <div>
      <h1>Hello World</h1>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
