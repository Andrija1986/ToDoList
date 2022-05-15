import React from 'react'

const Content = ({data, deleteHandler}) => {



    const list = data.map((item) => <p key={item.id}>{item.item} <button onClick={()=> deleteHandler(item.id)} >🗑️</button></p>)
  return (
    <section>
        {list}
    </section>
  )
}

export default Content