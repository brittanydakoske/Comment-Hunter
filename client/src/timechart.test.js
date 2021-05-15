import {SelectChart} from "./components/selectChart.js";
import {SelectTimeFrame} from "./components/selectTimeFrame.js";
import {act, renderHook} from '@testing-library/react-hooks';
import {get1hr, get12hr, get24hr} from "./api/request";

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

        var dataString = JSON.stringify(get1hr().then( res => res.data));

        act( () => {
            result.current.set1hr()
        });

        var dataString = JSON.stringify(get1hr());
        
        expect(JSON.stringify(result.current.data)).toBe(dataString);
    })
})

describe("12 hour data", () => {
    it("Set data to reflect 12 hours worth of data", () => {
        const {result} = renderHook(SelectTimeFrame)

        act(() => {
            result.current.set12hr()
        })

        var dataString = JSON.stringify(get12hr());

        expect(JSON.stringify(result.current.data)).toBe(dataString);
    })
})

describe("1 day of data", () => {
    it("Set data to reflect 1 day worth of data", () => {
        const {result} = renderHook(SelectTimeFrame)

        act(() => {
            result.current.set24hr()
        })

        var dataString = JSON.stringify(get24hr());

        expect(JSON.stringify(result.current.data)).toBe(dataString);
    })
})
