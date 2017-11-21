export const greeting:Function = () => {
    const greet = document.createElement('p');
    greet.innerText = "Hello world";
    document.body.appendChild(greet);
}