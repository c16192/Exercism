class HelloWorld {
    static hello(name?: string) {
        // Your code here
        if (name == undefined) {
            return 'Hello, World!';
        } else {
            return 'Hello, '+ name +'!';

        }
    }
}

export default HelloWorld