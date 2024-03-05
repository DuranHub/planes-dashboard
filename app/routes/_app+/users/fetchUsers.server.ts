export function fetchUser() {
    return new Promise<any>((resolve) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                resolve(data);
            });
    });
}