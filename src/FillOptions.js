import React from 'react'

export default function FillOptions() {
  const maara = [];
  for (let i = 0;i <=50; i++) {
    maara.push(i);
  }
  
  return (
      maara.map(maara => {
        return <option value={maara}>{maara.toFixed()}</option>
      })
  )
}
