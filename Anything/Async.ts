function appendAndPromise(url: string, data: string): Promise<any> {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => data)
        .catch((e) => console.error(e))
}

// interface Executor<T> {
//     f: (resolve: (value: T) => void, reject: (error: unknown) => void) => void
// }
//
// class PromiseM<T> {
//     constructor(f: Executor<T>) {}
//
//     then<U>(g: (result: T) => PromiseM<U>): PromiseM<U> {
//     }
//     catch<U>(g: (error: unknown) => PromiseM<U>): PromiseM<U> {
//         // ...
//     }
// }

new Promise<string>((res, rej) => {}).then().catch().
