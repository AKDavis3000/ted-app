import Image from 'next/image';
import Main1 from './components/Main1';
import Main2 from './components/Main2';
import Main3 from './components/Main3';
import './scss/styles.scss';

export default function Home() {
  return (
    <>
      <Main1 />
      <Main2 />
      <Main3 />
    </>
  );
}
