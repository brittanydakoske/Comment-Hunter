import {SelectChart} from "./components/selectChart.js";
import {SelectTimeFrame} from "./components/selectTimeFrame.js";
import {act, renderHook} from '@testing-library/react-hooks';
import {get1hr, get1day, get1week} from "./api/request";
// import { get1hr } from "./api/request.js";
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

describe("1 hr data", () => {
    it("Set data to reflect 1 hr worth of data", async () => {
        const {result} = renderHook(SelectTimeFrame)

        await act(async () => {
            result.current.set1hr()
        })

        var dataString = JSON.stringify(get1hr().then( res => res.data));

        console.log(dataString);

        expect(result.current.data).toBe(dataString);
    })
})

describe("1 day data", () => {
    it("Set data to reflect 1 day worth of data", () => {
        const {result} = renderHook(SelectTimeFrame)

        act(() => {
            result.current.set1day()
        })

        var dataString = JSON.stringify(set1day);

        expect(JSON.stringify(result.current.data)).toBe(dataString);
    })
})

describe("1 week data", () => {
    it("Set data to reflect 1 week worth of data", () => {
        const {result} = renderHook(SelectTimeFrame)

        act(() => {
            result.current.set1week()
        })

        var dataString = JSON.stringify(set1week);

        expect(JSON.stringify(result.current.data)).toBe(dataString);
    })
})