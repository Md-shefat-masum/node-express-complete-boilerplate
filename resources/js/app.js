import "../scss/app.scss"
document.getElementById('app').innerHTML = `
    <img src="avatar.jpg"/>
`
console.log('asdf');
console.log('asdf');

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(function () {
        // clearInterval(timer);
    });
}
