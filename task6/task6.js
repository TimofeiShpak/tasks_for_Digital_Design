var model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    }, {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    }, {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    }
]

function createUser(dataUser) {
    const user = {};
    user.name = dataUser.name; 
    user.id = dataUser.id;
    user.posts = [];
    return user;
}

function createGroup() {
    const group = [];
    group.push(createUser(model[0].user));
    for (let i = 0; i < model.length; i++) {
        let indexElement = group.findIndex((element) => element.name === model[i].user.name);
        if (indexElement === -1) {
            group.push(createUser(model[i].user));
            indexElement = group.findIndex((element) => element.name === model[i].user.name);
        } 
        group[indexElement].posts.push({id:model[i].id,title:model[i].title,text:model[i].text});
    }
    return group;
}

console.log(createGroup());