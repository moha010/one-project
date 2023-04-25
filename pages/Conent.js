import Link from "next/link";
export default function Conent(props) {
  return (
    <div>
      {console.log(props)}
      {console.log("hello propse")}
      <h1>conect us</h1>
      {
        props.Conent.map((e,index)=>{
          return(
            <h1 key={index}>
              <Link href={`post/${e.id}`}> {e.title} </Link>
            </h1>
          )
        })
      }
    </div>
  )
}
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/posts");
  const date =await res.json();
  return ({
    props: {
      Conent:date,
    }, 
  })
}

