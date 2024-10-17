import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar/Navbar';
import Main from './components/home/Main';

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <Main />
    </main>
  );
}
