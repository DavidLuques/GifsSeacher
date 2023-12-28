import { useState } from 'react'
import { AddCategorie, GifGrid } from './components'


export const GifApp = () => {

  const [categories, setCategories] = useState(['cat'])

  const onAddCategory = (value) => {
    if (categories.includes(value)) return;
    setCategories([value, ...categories])

  }

  return (
    <>
      <h1>Gif expert app</h1>
      <AddCategorie onAddCategory={(event) => { return onAddCategory(event) }}></AddCategorie>

      {/* <button onClick={()=>{onAddCategory()}}>Add</button> */}
      {categories.map((cate) => {
        return (
          <GifGrid cate={cate} key={cate} />
        )
      })}



    </>
  )

}