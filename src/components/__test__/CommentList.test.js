import { mount } from "enzyme";

import CommentList from "../CommentList";
import Root from "../../Root";

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ["Comment 1", "Comment 2"],
  };
  wrapped = mount(
    <Root>
      <CommentList initialState={initialState} />
    </Root>
  );
});

it("create one LI per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("shows the ext for each comment", () => {
  expect(wrapped.render().text()).toContain("Comment 1");
  expect(wrapped.render().text()).toContain("Comment 2");
});
