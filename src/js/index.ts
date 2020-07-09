import '../scss/index.scss';

new Promise((resolve,reject) => {
    resolve(0)
}).then(function(data) {
    console.log(data)
});
function myfn(a:string): void {
    console.log(a)
}
console.log($('div'));
myfn('aaa')