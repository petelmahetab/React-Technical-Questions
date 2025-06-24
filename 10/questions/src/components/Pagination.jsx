import React,{useState,useEffect} from 'react'

const Pagination = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetch(`https://dummyjson.com/users?limit=10&skip=${(page - 1) * 10}`)
        .then(res=>res.json()).then(data=>setData(data.users))
    }, [page])
    
  return (
    <div style={{backgoundColor:'white'}}>
       {data.map(item=><p key={item.id}>{item.email}</p>)}
        <button onClick={()=>setPage(pre=>pre+1)}>Next</button>
    </div>
  )
}

export default Pagination