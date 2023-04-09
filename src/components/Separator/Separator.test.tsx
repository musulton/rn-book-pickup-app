import renderer from "react-test-renderer"

import Separator from "./Separator";

describe("<Separator />", () => {
    it("should render Separator correctly", () => {
        const tree = renderer.create(<Separator />).toJSON()

        expect(tree).toMatchSnapshot();
    })
});
