alert("替换成功")
import {a5 as e, a6 as a, a7 as t, a8 as n, a9 as s, aa as r, ab as o, ac as p, ad as u, ae as c, af as i, d as l, z as m, H as d, O as h, ag as f, ah as g, ai as A, B as v, K as j} from "./chunks/framework.ChchZetX.js";
import {R as b} from "./chunks/theme.CdK93s_2.js";
const k = function e(a) {
    if (a.extends) {
        const t = e(a.extends);
        return {
            ...t,
            ...a,
            async enhanceApp(e) {
                t.enhanceApp && await t.enhanceApp(e),
                a.enhanceApp && await a.enhanceApp(e)
            }
        }
    }
    return a
}(b)
  , w = l({
    name: "VitePressApp",
    setup() {
        const {site: e, lang: a, dir: t} = m();
        return d((()=>{
            h((()=>{
                document.documentElement.lang = a.value,
                document.documentElement.dir = t.value
            }
            ))
        }
        )),
        e.value.router.prefetchLinks && f(),
        g(),
        A(),
        k.setup && k.setup(),
        ()=>v(k.Layout)
    }
});
async function y() {
    globalThis.__VITEPRESS__ = !0;
    const a = function() {
        let a, t = e;
        return c((n=>{
            let s = i(n)
              , r = null;
            return s && (t && (a = s),
            (t || a === s) && (s = s.replace(/\.js$/, ".lean.js")),
            r = import(s)),
            e && (t = !1),
            r
        }
        ), k.NotFound)
    }()
      , l = u(w);
    l.provide(t, a);
    const m = n(a.route);
    return l.provide(s, m),
    l.component("Content", r),
    l.component("ClientOnly", o),
    Object.defineProperties(l.config.globalProperties, {
        $frontmatter: {
            get: ()=>m.frontmatter.value
        },
        $params: {
            get: ()=>m.page.value.params
        }
    }),
    k.enhanceApp && await k.enhanceApp({
        app: l,
        router: a,
        siteData: p
    }),
    {
        app: l,
        router: a,
        data: m
    }
}
e && y().then((({app: e, router: t, data: n})=>{
    t.go().then((()=>{
        a(t.route, n.site),
        e.mount("#app")
    }
    ))
}
));
export {y as createApp};
