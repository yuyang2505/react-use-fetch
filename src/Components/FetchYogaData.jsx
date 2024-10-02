import UseFetch from './UseFetch'

const FetchYogaData = () => {
    const [data]=UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);
    return(
        <>
        <ul>
            {data && data.map(e=>(
              <>
              <li>
                <h3>Name:{e.name}</h3>
                <p>Benefits:{e.benefits}</p>
                <p>Time_Duration:{e.time_duration}</p>
              </li>
              </>  
            ))}

        </ul>

        </>
    )
}

export default FetchYogaData