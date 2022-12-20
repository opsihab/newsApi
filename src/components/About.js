import  {useEffect} from 'react';

export default function About() {
  useEffect(() =>{
    document.title = "About-me";
},[])
  return (
    <div>
     <h1 className='text-center'>আমারlllllllllllllllllllllll সম্পর্কে</h1>
    </div>
  )
}
