const App=()=>{
  const [data, setData]=useState(0);
  const increment=()=>{
          setData(data+1)
  }
        return(
          // <div className={style.main}>
          //   <h1>
          //     Hi There!
          //   </h1>
          // </div>
          <div>
            <h1>{data}</h1>
          
          <button onClick={increment}>click</button>
          </div>

        )
}
export default app
