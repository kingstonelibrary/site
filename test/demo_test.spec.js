// import assert from 'power-assert';  mochaのオプションをいろいろ変えてヤッタがimportが解決されず以下にした
var assert = require('assert');
describe('ES6 demo', () => {

    it('Destructuring and TemplateLiteral', () => {
        let [alice, bob] = [ { name: 'alice' }, { name: 'bob' } ];
        assert(`${alice.name} and ${bob.name}` === `bob and alice`);
    });

    it('ArrowFunctionExpression and SpreadElement', () => {
        let seven = 7, ary = [4, 3];
        assert(seven === ((v, i) => v + i)(...[...ary]));
    });

    it('Enhanced Object Literals', () => {
        let name = 'bobby';
        assert.deepEqual({
            name,
            [ `${name}'s greet` ]: `Hello, I'm ${name}`
        }, null);
    });

});