//How to use props & how to use props in Function component
function Property(props){
    console.log(props);
    return(<div>
         <h1>
         name:{props.name} 
         </h1>
         <h1>
         age:{props.age}
         </h1>
         <h1>
         place:{props.place} 

         </h1>;
         </div>
    )
}
export default Property;