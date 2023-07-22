import { useQuery, useQueryClient } from 'react-query';
import './App.css';
import Loading from './components/Loading';
import MainPage from './components/MainPage';
import axios from 'axios';
import Search from './components/Search';
import { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const FetchUrl = (d) => {
  return (`https://api.dictionaryapi.dev/api/v2/entries/en/${d}`)
}

function App() {
  const [search, setSearch] = useState('hello');
  const queryClient = useQueryClient();

  useEffect(() => {
    const refetchData = async () => {
      await queryClient.prefetchQuery('words', () =>
        axios.get(FetchUrl(search))
      );
    };

    refetchData();
  }, [search, queryClient]);


  const { isLoading, isError, data } = useQuery('words', () =>
    axios.get(FetchUrl(search)));

  if (isLoading) {
    return (
      <div className=' w-full h-screen flex flex-col items-center justify-center bg-neutral-950 md:[flex-col]'>
        <SkeletonTheme baseColor='#333' highlightColor='#666'>
          <div style={{ width: "10%", height: "20%", paddingTop: "10%" }}><Skeleton /></div>
        </SkeletonTheme>

        <div className=' w-full h-full flex flex-row'>
          <Loading />
          <Loading />
          <Loading />
        </div>
      </div>
    );
  } else if (isError) {
    return (
      <div>Error</div>
    );
  } else {
    return (
      <div className=' w-full h-screen flex flex-col bg-neutral-950 items-center justify-between'>
        <Search setSearch={setSearch} />
        <MainPage data={data?.data} />
      </div>

    )
  }
}

export default App;
