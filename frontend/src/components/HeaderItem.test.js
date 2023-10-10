import renderer from "react-test-renderer";
import Header from "././Header";


//snapshot test for the header comp.
test("FavItem basic render", () => {
  const component = renderer.create(
  <Header></Header>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
