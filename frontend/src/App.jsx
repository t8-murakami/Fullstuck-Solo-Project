import { useState, useEffect } from 'react';
import NewItemForm from './NewItemForm';
import PathList from './PathList';
import axios from 'axios';




const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';
console.log(`Base URL: ${baseUrl}`);


export default function App() {

  // Path データの状態管理
  const [paths, setPaths] = useState([])

  //レンダリング時にAPIからPathデータを取得
  
      const fetchPath = async () => {
        try {
        const res = await axios.get(`${baseUrl}/paths`)
        console.log('APIからのレスポンス:', res.data);
        if(Array.isArray(res.data)){
          setPaths(res.data)
        }else{
          console.error('取得したデータは配列ではありません:', res.data);
          setPaths([]); // 配列でない場合は空配列に設定
        }

        } catch (err) {
        // エラーハンドリング
        console.error(`データ取得エラー: ${err}`);
      }
    };

    useEffect(() => {
      fetchPath();
    }, []);

  // Path の追加
  async function addPath (description, path)  {
    try{
      const res = await axios.post (`${baseUrl}/paths`, { description, path })
      const newPath = res.data;
      setPaths((currentPaths) => [...currentPaths, newPath]);

      await fetchPath();
    }catch(err){
      console.error(`データ追加エラー: ${err}`);
    }
  }

  // Path の削除
  async function deletePath(id) {
    try{
      await axios.delete (`${baseUrl}/paths/${id}`);
      setPaths((currentPaths) => currentPaths.filter((path)=>path.id !==id));

      await fetchPath();
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