describe("Employee class Testing",()=> {
    it("employee property testing", ()=> {
        let add = new Address("Kansas City","Mat");
        let emp = new Employee(100,"James",1200,add);
        expect(emp.getId()).toEqual(100);
        expect(emp.getName()).toBe("James");
        expect(emp.getSalary()).toBeGreaterThan(1000);
        // expect(emp.getSalary()).toBe(undefined);
    })

    it("Address property testing", ()=> {
        let add = new Address("Kansas City","Mat");
        expect(add.getCity()).toEqual("Kansas City");
        expect(add.getState()).toEqual("Mat");

    })
})