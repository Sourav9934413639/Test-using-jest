
const sum=require("./sum");

test("add test1",()=>{
    expect(sum(5,3)).toBe(8);
})
test("add test2",()=>{
    expect(sum(7,2)).toBe(9);
})
test("add test3",()=>{
    expect(sum(0,-3)).toBe(-3);
})
