import  {useEffect} from 'react';

export default function Home() {
  useEffect(() =>{
    document.title = "Something new";
},[])
  return (
    <div>
     <h1 className='text-center'>নতুন কিছু</h1>
    </div>
  )
}
