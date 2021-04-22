import {SelectChart} from "./components/selectChart.js";
import {act, renderHook} from '@testing-library/react-hooks';
// import { INET } from "sequelize/types";
// import { TableSortLabel } from "@material-ui/core";

describe("Sunburst", () => {
    it("Sets graph to Sunburst", () => {
        const {result} = renderHook(SelectChart)

        act(() => {
            result.current.sunGraph()
        })

        expect(result.current.chart).toBe("Sunburst");
    })
})

describe("Bubblechart", () => {
    it("Sets graph to Bubblechart", () => {
        const {result} = renderHook(SelectChart)

        act(() => {
            result.current.bubbleGraph()
        })

        expect(result.current.chart).toBe("Bubblechart");
    })
})