
let arrObj = [
    {name : "Natasha", lastName : "Kotova", age : 20},
    {name : "Varuj", lastName : "Khachatryan", age : 21},
    {name : "Nane", lastName : "Nersisyan", age : 21},
    {name : "Mane", lastName : "Martirosyan", age : 45}
];

function App2(){
    const newArr = arrObj.map((e) => {
        return <div>
            My name is <b>{e.name} {e.lastName}</b>
            </div>
    })
    return (<div className="app2">
        <div className="diven">
            {newArr}    
        </div>
    </div>)
}
export default App2