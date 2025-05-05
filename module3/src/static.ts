{
    // static

    class Counter{
      static  count: number = 0;
      static  increment(){
            // return (this.count = this.count + 1)
            return (Counter.count = Counter.count + 1)
        }
        // increment(){
        //     // return (this.count = this.count + 1)
        //     return (Counter.count = Counter.count + 1)
        // }
      static  descrement(){
            return (Counter.count = Counter.count -1)
        }
        // descrement(){
        //     return (Counter.count = Counter.count -1)
        // }
    }

    const instance1 = new Counter()
    console.log(Counter.increment())   // 1 -> different memory
    // console.log(instance1.increment())   // 1 -> different memory
    // console.log(instance1.increment())   // 1 -> different memory
    const instance2 = new Counter()
    console.log(Counter.increment()) // 1 -> different memory
    // console.log(instance2.increment()) // 1 -> different memory










    //
}