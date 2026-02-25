function Header() {
  return <h1>Learning React Components</h1>;
}

function Footer() {
  return <p>This is a reusable footer component</p>;
}

export default function App() {
  return (
    <div>
      <Header />
      <p>This is the main app component</p>
      <Footer />
    </div>
  );
}
