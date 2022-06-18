import React from "react";
import Select from 'react-select'

import TopTrumpCards from "./TopTrumps/TopTrumpCards";
import ZooKiMonCards from "./ZooKiMon/ZooKiMonCards";

const options = [
  { value: 'zookimon', label: 'Zoo-Ki-Mon' },
  { value: 'legoTopTrumps', label: 'Lego Top Trumps' }
]

const App: React.FC = () => {
  const [collection, setCollection] = React.useState(options[0]);

  const onChange = React.useCallback((value) => {
    setCollection(value);
  }, [setCollection])

  return (
    <div>
      <h1>Pick a Collection</h1>
      <Select options={options} value={collection} onChange={onChange} />

      {collection.value === 'legoTopTrumps' && <TopTrumpCards />}
      {collection.value === 'zookimon' && <ZooKiMonCards />}
    </div>);
};

export default App;
