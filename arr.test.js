const arr=require("./arr");
test("whether 5 in is the given array",()=>{
    expect(arr).not.toContain(5)
})
test("whether 5 in is the given array",()=>{
    expect(arr).toContain(-5)
})
test("whether 5 in is the given array",()=>{
    expect(arr).toContain(3)
})
test("whether 5 in is the given array",()=>{
    expect(arr).not.toContain(2)
})
test("whether 5 in is the given array",()=>{
    expect(arr).toContain(7)
})