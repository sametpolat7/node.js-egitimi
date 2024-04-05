let postNum = 0

const posts = [
    { id: ++postNum, body: `Post ${postNum}` },
    { id: ++postNum, body: `Post ${postNum}` },
    { id: ++postNum, body: `Post ${postNum}` },
    { id: ++postNum, body: `Post ${postNum}` },
    { id: ++postNum, body: `Post ${postNum}` },
]

const listPosts = () => {
    posts.forEach((post) => {
        console.log(`${post.id}) ${post.body}`);
    })
}

const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
        console.log('Post ekleniyor...');
        posts.push(newPost);
        if (posts.includes(newPost)) {
            resolve('Post eklendi.');
        }
        else {
            reject('Postlar bulunamadi!');
        }
    })
}

const showPost = async () => {
    try {
        const result = await addPost({ id: ++postNum, body: `Post ${postNum}` });
        listPosts();
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}

showPost();
