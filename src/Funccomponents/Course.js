//List and Keys
import React from "react";
function Course(){
const Course=[
    {id:1,name:'Angular Courses'},
    {id:2,name:'React Courses'},
    {id:3,name:'AWS Courses'},
    {id:4,name:'MEAN Courses'},
    {id:5,name:'MERN Courses'}
]
return(
<div>
<h1>React JS list and Keys</h1>
<ul>
    {
     Course.map((data) =>(
       <li key={data.id}>{data.name}</li>
     ))
    }
</ul>
</div>
)
}
export default Course;