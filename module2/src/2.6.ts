{
    // constraints

    const addCourseToStudent =<T extends {id:number; name:string; email:string}>(student:T) =>{
        const course = 'Next Level Web Development'

        return {
            ...student,
            course
        }
    }

    const student3 = addCourseToStudent({id:44, name:'Sipon', email:'sipon@gmail.com', emni:'emni'})

    const student1 = addCourseToStudent <{
        id: number;
        name: string;
        email: string;
        devType:string;
    }>({id: 223, name:'Mr X', email:'X@mail.com', devType:'NLWD'})
    const student2 = addCourseToStudent({id:213, name:'Mr Y', email:'Y@mail.com', hasWathc:'Apple Watch'})








    //
}