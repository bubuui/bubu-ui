import { defineComponent as E, ref as m, onMounted as M, watchEffect as H, nextTick as C, openBlock as I, createElementBlock as A, mergeProps as P, withModifiers as S } from "vue";
const B = ["disabled", "placeholder"], _ = /* @__PURE__ */ E({
  name: "BuRichTextArea",
  __name: "richTextArea",
  props: {
    disabled: { type: Boolean, default: !1 },
    placeholder: { default: "" },
    copy: { type: Boolean, default: !1 },
    modelValue: {},
    maxImgWidth: { default: "240px" },
    maxImgHeight: { default: "240px" },
    maxImgSize: { default: 4 },
    imgPrevie: { type: Boolean, default: !1 }
  },
  emits: ["change", "update:modelValue", "imgUpload", "keyup"],
  setup(g, { expose: v, emit: f }) {
    const c = f, l = g, i = m(), t = m(), d = m(!1);
    M(() => {
      H(() => {
        t.value && (l.disabled ? t.value.setAttribute("contenteditable", "false") : (t.value.setAttribute("contenteditable", "true"), t.value.focus()));
      }), C(() => {
        t.value && (t.value.innerHTML = l.modelValue, x(), y(), l.copy && l.imgPrevie && b(), t.value.addEventListener("compositionstart", () => {
          d.value = !0;
        }), t.value.addEventListener("compositionend", () => {
          d.value = !1;
        }));
      });
    });
    function h(e) {
      const a = () => {
        console.log("1211"), setTimeout(() => {
          var n;
          c("update:modelValue", (n = t.value) == null ? void 0 : n.innerHTML), c("change"), c("keyup", e);
        }, 10);
      };
      d.value ? e.code === "Space" && a() : a();
    }
    function x() {
      var e = window.getSelection(), a = document.createRange();
      a.selectNodeContents(t.value), a.collapse(!1), e && e.removeAllRanges(), e && e.addRange(a);
    }
    function y() {
      var e;
      (e = t.value) == null || e.addEventListener("paste", async (a) => {
        var o, p;
        console.log("props.copy", l.copy), a.preventDefault(), a.stopPropagation();
        let n = ((o = a.clipboardData) == null ? void 0 : o.items) || [];
        for (let u = 0; u < (n == null ? void 0 : n.length); u++) {
          const r = n[u];
          if (r.kind === "string" && r.type === "text/plain")
            r.getAsString(function(s) {
              document.execCommand("insertHTML", !0, s);
            });
          else if (r.kind === "file" && r.type.indexOf("image") !== -1 && l.copy) {
            const s = r.getAsFile();
            if (s && s.size < l.maxImgSize * 1024 * 1024) {
              const w = window.URL.createObjectURL(s);
              document.execCommand(
                "insertHTML",
                !0,
                `<img src=${w} style="max-width: ${l.maxImgWidth}; max-height: ${l.maxImgHeight};vertical-align: bottom"></img>`
              ), c("update:modelValue", (p = t.value) == null ? void 0 : p.innerHTML), c("imgUpload", s), c("change");
            }
          }
        }
      });
    }
    function b() {
      var e;
      (e = t.value) == null || e.addEventListener("dblclick", (a) => {
        const n = a.target;
        if (console.log("target", n), n && n.tagName === "IMG") {
          if (i.value)
            i.value.style.display = "block", i.value.classList.add("bu-rich-img-wrapper-active"), i.value.children[0].src = n.currentSrc;
          else {
            i.value = document.createElement("div"), i.value.classList.add("bu-rich-img-wrapper-active");
            const o = document.createElement("img");
            o.src = n.currentSrc, o.classList.add("bu-rich-enlarged"), i.value.appendChild(o), document.body.appendChild(i.value);
          }
          i.value.addEventListener("click", (o) => {
            o.target && o.target.tagName !== "IMG" && (i.value.classList.remove(
              "bu-rich-img-wrapper-active"
            ), i.value.style.display = "none");
          });
        }
      });
    }
    function L(e) {
      t.value && (t.value.innerText = e);
    }
    function T() {
      return t.value && t.value.innerText;
    }
    function k(e) {
      document.execCommand("insertHTML", !0, e);
    }
    return v({
      setText: L,
      getText: T,
      insertHtml: k,
      textDom: t
    }), (e, a) => (I(), A("div", P({ class: "bu-rich-textarea-content" }, e.$attrs, {
      ref_key: "textDom",
      ref: t,
      contenteditable: "",
      disabled: e.disabled,
      placeholder: e.placeholder,
      onKeyup: S(h, ["stop"])
    }), null, 16, B));
  }
});
export {
  _ as default
};
