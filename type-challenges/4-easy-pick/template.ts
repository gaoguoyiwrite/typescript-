
//extends keyof 类型约束
type MyPick<T, K extends keyof T> = {
  [P in K] : T[P]
}

//js
// function myPick(todo,keys){
//   const obj = {}
//   keys.forEact(key=>{
//     obj[key] = todo[key]
//   })
//   return obj
// }