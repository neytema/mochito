module.exports = create();

function create() {
    var stack = [];

    describe.stack = stack;
    describe.stage = stage;

    return stage(describe);

    function stage(ctx) {
        ctx.describe = describe;
        ctx.it = it;
        ctx.before = before;
        ctx.after = after;
        ctx.beforeEach = beforeEach;
        ctx.afterEach = afterEach;

        return ctx;
    }

    function describe(name, body) {
        if ( ! arguments.length) {
            return create();
        }

        stack.push({ type: 'begin suite', name: name });
        if (body) body();
        stack.push({ type: 'end suite' });
    }

    function it() {}
    function before() {}
    function after() {}
    function beforeEach() {}
    function afterEach() {}
}
