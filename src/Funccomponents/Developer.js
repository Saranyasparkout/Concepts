import React from "react";
const Developers = ()=>
{
  const Developer = [
   {
         name:'SaranyaSarah',
         Skills:[
         {name:'ReactJS',type:'Frontend'},
         {name:'NodeJS',type:'Backend'}
        ]
    },
    {  
        name: 'Saro',
        Skills: [
         { name:'AngularJS',type:'Frontend'},
         { name:'ExpressJS',type:'Backend' }
        ]
    }
  ]

return(
    <div>
{Developer.map((Dev,index) => (
  <div key={index}>
    <h2>{Dev.name} Skills</h2>
      <div>
        {Dev.Skills.map((Skills,index)=>(
            <p key={index}>
              {Skills.type} -{Skills.name} 
            </p>
        ))}
       </div>
    </div>
    
  )
)
}
</div>
)
}
export default Developers


