export async function getAllBooks(url) {
    let books = null;
    let error = null;
    await axios
        .get(url)
        .then((result) => {
            books = result.data;
        })
        .catch((err) => {
            error = err;
        });
    return {
        books: books,
        error: error,
    };
}

export async function getBookByID(url, id) {
    let book = null;
    let error = null;
    await axios
        .get(url + `/${id}`)
        .then((result) => {
            book = result.data;
        })
        .catch((err) => {
            error = err;
        })
    return {
        books: book,
        error: error,
    };
}

export async function deleteBooksByID(url, id) {
    let response = null;
    let error = null;
    await axios.delete(url + `/${id}`).then((res) => {
        response = res;
    }).catch((err) => {
        error = err;
    })
    return {
        response: response,
        error: error,
    };


}