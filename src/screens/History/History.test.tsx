import {useSelector} from "react-redux";
import {cleanup, render, screen} from "@testing-library/react-native";

import History from "./History";
import {book} from "../../fixtures/testData";

jest
    .mock("react-redux")
    .mock("../../components/EmptyState", () => "EmptyState")
    .mock("../../components/CardBook", () => "CardBook")
    .mock("../../components/Separator", () => "Separator")

describe("<History />", () => {
    beforeEach(() => {
        cleanup()
    })

    it("should render History correctly", () => {
        useSelector.mockReturnValue([ book ])
        render(<History />)

        expect(screen.toJSON()).toMatchSnapshot()
    })

    it("should render History correctly when empty state", () => {
        useSelector.mockReturnValue([])

        render(<History />)

        expect(screen.toJSON()).toMatchSnapshot()
    })
})
