import { useState, useEffect } from 'react';
import NewItemForm from './NewItemForm';
import PathList from './PathList';
import axios from 'axios';




const baseUrl = import.meta.env.VITE_API_BASE_URL

export default function App() {

  // Path データの状態管理
  const [paths, setPaths] = useState([])

  //レンダリング時にAPIからPathデータを取得
  useEffect(() => {
      const fetchPath = async () => {
        try {
        const res = await axios.get(`${baseUrl}/paths`)
        setPaths(res.data)
        console.log('APIからデータを取得しました:', res.data);

        } catch (err) {
        // エラーハンドリング
        console.error(`データ取得エラー: ${err}`);
      }
    }
      fetchPath();
    }, []);

  // Path の追加
  async function addPath (description, path)  {
    try{
      const res = await axios.post (`${baseUrl}/paths`, { description, path })
      const newPath = res.data;
      setPaths((currentPaths) => [...currentPaths, newPath]);
    }catch(err){
      console.error(`データ追加エラー: ${err}`);
    }
  }

  // Path の削除
  async function deletePath(id) {
    try{
      await axios.delete (`${baseUrl}/paths/${id}`);
      setPaths((currentPaths) => currentPaths.filter((path)=>path.id !==id));
    }catch(err){
      console.error(`データ削除エラー: ${err}`);
    }
  }

  return (
    <div className='App'>
      <h1>Path管理ツール</h1>
      <NewItemForm onSubmit={addPath}/>
      <PathList paths={paths} deletePath={deletePath}/>

    </div>
  );
}
