import { useState } from 'react';

export default function NewItemForm({ onSubmit }) {
  const [description, setDescription] = useState('');
  const [path, setPath] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !path) return;
    onSubmit(description, path);
    setDescription('');
    setPath('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Path の説明"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Path"
        value={path}
        onChange={(e) => setPath(e.target.value)}
      />
      <button type="submit">登録</button>
    </form>
  );
}
