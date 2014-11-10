{"filter":false,"title":"clone-object.js","tooltip":"/test/clone-object.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":3}},"text":"});"},{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":["describe('clone object', function () {","  it('should clone an object', function () {","    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},","        obj = {};","","    expect(obj).toEqual(expected);","    expect(obj).not.toBe(expected);","  });"]},{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":38}},"text":"describe('clone object', function () {"},{"action":"insertText","range":{"start":{"row":0,"column":38},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":14,"column":0}},"lines":["  it('should clone an object', function () {","    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},","        obj = {};","if (expected instanceof Object){","                obj = expected.constructor();","                for (var attr in expected) {","                        if (expected.hasOwnProperty(attr))","                                obj[attr] = expected[attr];","                }","    }","    expect(obj).toEqual(expected);","    expect(obj).not.toBe(expected);","  });"]},{"action":"insertText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":3}},"text":"});"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":14,"column":3},"end":{"row":14,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1415648639064,"hash":"9a17bba351c46e642b49291cf5b014ffccb0c880"}