import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// console.log(heading);
//What is JSX: It is HTML like syntax
//JSX => Babel transpiles it to React.createElement
// const heading = (
//   <h1 className="head" tabIndex="5">
//     Namaste React from JSX
//   </h1>
// );

//React Components
//1.Class Componenets---Old
//2.Functional Components---New

// const headingComponenet = () => {
//   return <h1 className="heading"> Namaste React From Functinal Componenet</h1>;
// };

// const headingComponenet2 = () => {
//   <h1 className="heading">Namaste React From Functinal Componenet</h1>;
// };

//Above both are same
//This is Functional Compoenent

// const Title=()=>(
//   <h1 className="head">Namaste React From Title Component</h1>
// )
//we can write above as normal function also
const element = <span>Ima a Span tag</span>;

const Title = function () {
  return (
    <h1 className="head">
      {element}
      Namaste React From Title Component
    </h1>
  );
};

// const data=api.getData()
const HeadingCompoenet = () => (
  <>
    <div id="container1">
      {/* <Title /> */}
      {/* {Title()} */}
      {/* {data} */}
      {/* <h1>{100 + 599}</h1> */}
      <h1 id="heading">Namaste React From Functional Component</h1>
    </div>
    <div id="container2">
      <h2>I am h2 tag from jsx</h2>
    </div>
  </>
);

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingCompoenet />);

// const styleCard={
//   backgroundColor:"#f0f0f0"
// }

//const RestaurantCard=({resName,cusine})=>{

//   return(
//       <div className="rest-card" style={{backgroundColor:"#f0f0f0"}}>

//         <img className="foodImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkZM79sNZ6cXInWRlsMnUW6tqZWeveXNvOQ&usqp=CAU" alt="food"/>
//         <h3>{resName}</h3>
//         <h4>{cusine}</h4>
//         <h4>4.3 Stars</h4>
//         <h4>38 Minutes</h4>
//       </div>
//   )
// }
//-----------------------------------------Data passing as props----------------------------//
// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search">Search</div>
//       <div className="resto-container">
//         {/* <RestaurantCard resName="Tgrill" cusine="Biryani, Arabian Mandi" />
//           <RestaurantCard resName="KFC" cusine="Fried Chicken, Burgers" /> */}
//         {resList.map((restaurant) => (
//           <RestaurantCard key={restaurant.data.id} resData={restaurant} />
//         ))}
//       </div>
//     </div>
//   );
// };