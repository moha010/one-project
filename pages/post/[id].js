import React from 'react'

export default function posts(props) {

  return (
    <div>
      <h2>hello servier side</h2>
      <h1>{props.dat.title}</h1>
      <p>{props.dat.description}</p>
    </div>
  )
}

export async function getStaticPaths(){
  const res = await fetch("http://localhost:3000/api/posts");
  const date = await res.json();
  const paths = date.map((d)=>{
    return{
      params : {id : `${d.id}`}
    }
  })
  return{
    paths : paths,
    fallback : false ,
  }
}

export async function getStaticProps(context){
  const res = await fetch(`http://localhost:3000/api/posts/${context.params.id}`);
  const date = await res.json();
  return{
    props:{
      dat : date
    }
  }
}