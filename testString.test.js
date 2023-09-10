const str=require("./testString");

test("whether given string contains z",()=>{
    expect(str).not.toMatch(/z/);
})
test("whether given string contains an",()=>{
    expect(str).toMatch(/an/);
})
test("whether given string contains space",()=>{
    expect(str).toMatch(/ /);
})