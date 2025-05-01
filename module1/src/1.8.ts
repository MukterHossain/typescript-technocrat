{
    //destructurign



    const user ={
        id:210,
        name: {
            firstName: 'MD',
            midleName: 'Mukter',
            lastName: 'Hossain'
        },
        contactNo: '019012510000',
        address: 'Uganda'
    }
    const {contactNo, name:{midleName}} = user

    // array destructuring
    const myFriends = ['Manun', 'Kobir', 'Ross', 'Rachel', 'Tohin']
    const [, , bestFriend, ...rest] = myFriends









}