import logo from './logo.svg';
import './App.css';

function App() {
  
  let indianStates=["Andhra pradesh","Telangana", "Tamilnadu", "Kerala","Karnataka",
    "Maharashtra", "Madhya pradesh", "Assam","Odisha","Goa"]

    let capitalsOfIndianStates=["Amaravathi", "Hyderabad","Chennai", "Thiruvananthapuram",
      "Bangalore","Mumbai","Bhopal" ,"Dispur","Bhubaneswar","Panaji"]

  return (
    <div className="App">
      <h1>Array Methods</h1>

<button type="button" onClick={()=>{
  console.log(indianStates.length)
  for (let i = 0; i < indianStates.length; i++) {
    console.log(indianStates[i]); 
  }
}}>length</button>


<button type="button" onClick={()=>{
  console.log(indianStates.at(4))
}}>at</button>

<button type="button" onClick={()=>{
  console.log(indianStates);
  console.log(indianStates.toString());
  console.log(indianStates.join("___"));
}}>toString/join</button>


<button type="button" onClick={()=>{
  indianStates.push("Punjab")
  console.log(indianStates)
}}>push</button>

<button type="button" onClick={()=>{
  indianStates.pop()
  console.log(indianStates)
}}>pop</button>

<button type="button" onClick={()=>{
  indianStates.shift()
  console.log(indianStates)
}}>shift</button>

<button type="button" onClick={()=>{
  console.log(indianStates)
  indianStates.unshift("Bihar")
  console.log(indianStates)
}}>unshift</button>

<button type="button" onClick={()=>{
  console.log(indianStates)
  indianStates.splice(3,1,"West Bengal")
  //indianStates.splice(indianStates.length-2,1)
  console.log(indianStates)
}}>splice</button>

<button type="button" onClick={()=>{
  let capitalsOfIndianStates=["Amaravathi", "Hyderabad","Chennai", "Thiruvananthapuram",
     "Bangalore","Mumbai","Bhopal" ,"Dispur","Bhubaneswar","Panaji"]
     let india=indianStates.concat(capitalsOfIndianStates)
     console.log(indianStates)
     console.log(capitalsOfIndianStates)
     console.log(india)
}}>concat</button>

<button type="button" onClick={()=>{
  console.log(indianStates)
  delete indianStates[2];
  console.log(indianStates)
  indianStates.splice(2,1)
  console.log(indianStates)
}}>delete</button>

<button type="button" onClick={()=>{
  let india=[indianStates,capitalsOfIndianStates]
  console.log(india)
  console.log(india[0][0])
  console.log(india.flat())
}}>flat</button>

<button type="button" onClick={()=>{
  console.log(indianStates)
   let abc=indianStates.slice(3,6)
  console.log(abc)
}}>slice</button>


<button type="button" onClick={()=>{
  //let abc=indianStates.fill("America")
  let abc=indianStates.fill("America" ,2,4)
  console.log(abc)
}}>fill</button>

<button type="button" onClick={()=>{
  let country="INDIA"
  let abc= Array.from(country)
  console.log(abc)
}}>from</button>

<button type="button" onClick={()=>{
  let abc= indianStates.includes("bhagya")
  console.log(abc)
}}>includes</button>

<button type="button" onClick={()=>{
  let abc=indianStates.indexOf("Telangana")
  console.log(abc)
}}>indexOf</button>

<button type="button" onClick={()=>{
  let fruits=["Apple", "Banana", "Orange", "Apple", "Apple", "Grapes"]
  let abc=fruits.lastIndexOf("Apple")
  console.log(abc)
}}>lastIndexOf</button>


<button type="button" onClick={()=>{
  let abc=Array.isArray(indianStates)
  console.log(abc)
}}>isArray</button>

<button type="button" onClick={()=>{
  let abc=indianStates.reverse()
  console.log(abc)
}}>reverse</button>

<button type="button" onClick={()=>{
  let numbers= [1,9,13,67,34,10,28,8,3]
  numbers.sort((a,b)=> a-b)
  console.log(numbers)
//let abc=indianStates.sort()
//console.log(abc)
}}>sort</button>




<button type="button"onClick={()=>{
  let abc=indianStates.forEach((element, index)=>{
console.log(`${index}__${element}`)
  })
  console.log(abc)
}}>forEach</button>



<button type="button"onClick={()=>{
  let marks=[40,38,97,67,81,56]
  let result=marks.every((element, index)=>{
    return element>35
  })
  if(result==true)
  {
    console.log(`Student Passed`)
  }
  else{
    console.log(`Student Failed`)
  }
}}>every</button>


<button type="button"onClick={()=>{
  let marks=[40,38,5,67,81,56]
  let result=marks.some((element, index)=>{
    return element<35
  })
  if(result==true)
  {
    console.log(`Student Failed`)
  }
  else{
    console.log(`Student Passed`)
  }
}}>some</button>

<button type="button"onClick={()=>{
  let numbers=[45,7,21,89,64,41,35,90,10,23,34,28,22,78,89,62,59]
  let result=numbers.filter((element, index)=>{
     return element<40
     //return element%2==0
     //return element%2!=0

  })
  console.log(result)
}}>filter</button>

<button type="button"onClick={()=>{
 let numbers=[45,7,21,89,64,41,35,90,10,23,34,28,22,78,89,62,59]
 let result=numbers.find((element,index)=>{
  return element >50
 })
 let result1=numbers.findIndex((element,index)=>{
  return element >50
 })
 console.log(numbers)
 console.log(result)
 console.log(result1)
}}>find/findInex</button>

<button type="button"onClick={()=>{
  let numbers=[45,7,21,89,64,41,35,90,10,23,34,28,22,78,89,62,59]
  let result=numbers.findLast((element,index)=>{
   return element >50
  })
  let result1=numbers.findLastIndex((element,index)=>{
   return element >50
  })
  console.log(numbers)
  console.log(result)
  console.log(result1)
}}>findLast/findLastIndex</button>


<button type="button"onClick={()=>{
let name=["B","H","A","G","Y","A"]
let result=name.reduce((total,element,index)=>{
 return total+=element
})
console.log(result)
let result1=name.reduceRight((total,element,index)=>{
  return total+=element
 })
 console.log(result1)
}}>reduce/reduceRight</button>


<button type="button"onClick={()=>{
  
  let result=indianStates.map((element)=>{
    return `${element} is one of the state of India`
  })
  console.log(result)


}}>map</button>
{/*{indianStates.map((element)=>{
    return <p>{element}</p>
      })}*/}
    </div>
  );
}

export default App;
