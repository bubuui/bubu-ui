import { describe, it, expect } from "vitest";
import Button from "../src/button";
// 两个都可用，@testing-library/vue用法更通用一些，其他框架也是一样的写法
// import { render } from "@testing-library/vue";
import { mount } from "@vue/test-utils";

it("test is true", () => {
  const wrapper = mount(Button);
  //   getByText("nihao");
  expect(wrapper.text()).toContain("nihao");
});
