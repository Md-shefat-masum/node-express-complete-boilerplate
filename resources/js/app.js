console.log('hello');
document.getElementById('app').innerHTML = `
    <img src="avatar.jpg"/>
`

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(function () {
        // clearInterval(timer);
    });
}
