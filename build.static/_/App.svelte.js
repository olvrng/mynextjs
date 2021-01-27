import './App.svelte.css.proxy.js';
/* src/_/App.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	text
} from "../_snowpack/pkg/svelte/internal.js";

function create_fragment(ctx) {
	let main;
	let h1;
	let t0;
	let t1;
	let t2;

	return {
		c() {
			main = element("main");
			h1 = element("h1");
			t0 = text("Hello from ");
			t1 = text(/*name*/ ctx[0]);
			t2 = text("!");
			attr(h1, "class", "svelte-1saj8cy");
			attr(main, "class", "svelte-1saj8cy");
		},
		m(target, anchor) {
			insert(target, main, anchor);
			append(main, h1);
			append(h1, t0);
			append(h1, t1);
			append(h1, t2);
		},
		p(ctx, [dirty]) {
			if (dirty & /*name*/ 1) set_data(t1, /*name*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(main);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { name } = $$props;

	$$self.$$set = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
	};

	return [name];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { name: 0 });
	}
}

export default App;