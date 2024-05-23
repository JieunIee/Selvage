export default {
    title : 'User',
    name : 'user',
    type : 'document',
    fields : [
        {
            title : 'Username', //studio에서 보는 이름
            name : 'username', // 백엔드에서 보는 이름
            type : 'string'

        },
        {
            title : 'Name', //studio에서 보는 이름
            name : 'name', // 백엔드에서 보는 이름
            type : 'string' 
        },
        {
            title : 'Email', //studio에서 보는 이름
            name : 'email', // 백엔드에서 보는 이름
            type : 'string' 
        },
        {
            title : 'Image', //studio에서 보는 이름
            name : 'image', // 백엔드에서 보는 이름
            type : 'string' 
        },
        {
            title : 'IsArtist', //studio에서 보는 이름
            name : 'isArtist', // 백엔드에서 보는 이름
            type : 'boolean' 
        },
        {
            title : 'Following', //studio에서 보는 이름
            name : 'following', // 백엔드에서 보는 이름
            type : 'array',
            of : [
                {
                    type : 'reference',
                    to :[{type:'user'}]
                }
            ],
            validation : (Rule) => Rule.unique(),
        },
        {
            title : 'Followers', //studio에서 보는 이름
            name : 'followers', // 백엔드에서 보는 이름
            type : 'array',
            of : [
                {
                    type : 'reference',
                    to :[{type:'user'}]
                }
            ],
            validation : (Rule) => Rule.unique(),
        },
        {
            title : 'Bookmarks',
            name : 'bookmarks',
            type : 'array',
            of : [
                {
                    type : 'reference',
                    to :[{type:'post'}]
                }
            ],
            validation : (Rule) => Rule.unique(),
        }
    ],
    preview : {
        select : {
            title : 'name',
            subtitle : 'username'
        }
    }
}