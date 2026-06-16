import type { Meta, StoryObj } from "@storybook/react-vite";
import { CanPlot } from "../lib/CanPlot";
import { LinePlot } from "../lib/plot/LinePlot";
import { ChartAreaInteractions } from "../lib/interactions/ChartAreaInteractions";
import type { PlotScaleConfig } from "../lib/types";
import { XTicks, YTicks } from "../lib/plot/Ticks";
import { makeTimeTicks, makeLinearTicks, useInteractionsEvent } from "../lib";
import { useState } from "react";
import type { InteractionsEventPointerPosition } from "../lib/interactions/types";

const meta: Meta<typeof CanPlot> = {
    component: CanPlot,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const refPoint = Date.parse("2025-11-01T12:00:00Z");


export const TimeRangeMinEqualsMax: Story = {
    name: "time min === max",
    render: () => {
        const data = [{ x: refPoint, y: 50 }];
        const [cursor, setCursor] = useState<InteractionsEventPointerPosition | null>(null);
        const scales: PlotScaleConfig[] = [
            {
                id: "t",
                axis: { position: "bottom", size: 50 },
                origin: "x",
                min: refPoint,
                max: refPoint,
            },
            {
                id: "y",
                axis: { position: "left", size: 50 },
                origin: "y",
                min: 0,
                max: 100,
            },
        ];

        return (
            <div style={{ padding: "20px" }}>
                <div style={{ marginBottom: "20px" }}>
                    cssX: {cursor?.cssX}, cssY: {cursor?.cssY}
                </div>
                <CanPlot
                    style={{ width: "100%", height: "400px" }}
                    configuration={{
                        padding: { bottom: 20, left: 20, right: 20, top: 20 },
                        scales,
                    }}
                >
                    <LinePlot
                        data={data}
                        xScaleId="t"
                        yScaleId="y"
                        style={{ strokeStyle: "blue", lineWidth: 2 }}
                    />
                    <ChartAreaInteractions>
                        <Tooltip setCursor={setCursor} />
                    </ChartAreaInteractions>
                    <XTicks scaleId="t" ticks={makeTimeTicks({})} />
                    <YTicks scaleId="y" ticks={makeLinearTicks()} />
                </CanPlot>
            </div>
        );
    },
};

const Tooltip: React.FC<{ setCursor: React.Dispatch<React.SetStateAction<InteractionsEventPointerPosition | null>> }> = ({ setCursor
}) => {
    useInteractionsEvent("move", (event) => {
        setCursor(event.pointer ?? null);
    });
}

export const YRangeMinEqualsMax: Story = {
    name: "y min === max",
    render: () => {
        const data = [{ x: refPoint, y: 50 }];
        const [cursor, setCursor] = useState<InteractionsEventPointerPosition | null>(null);
        const scales: PlotScaleConfig[] = [
            {
                id: "t",
                axis: { position: "bottom", size: 50 },
                origin: "x",
                min: refPoint - 1000 * 60 * 60 * 24 * 7,
                max: refPoint,
            },
            {
                id: "y",
                axis: { position: "left", size: 50 },
                origin: "y",
                min: 50,
                max: 50,
            },
        ];

        return (
            <div style={{ padding: "20px" }}>
                <div style={{ marginBottom: "20px" }}>
                    cssX: {cursor?.cssX}, cssY: {cursor?.cssY}
                </div>
                <CanPlot
                    style={{ width: "100%", height: "400px" }}
                    configuration={{
                        padding: { bottom: 20, left: 20, right: 20, top: 20 },
                        scales,
                    }}
                >
                    <LinePlot
                        data={data}
                        xScaleId="t"
                        yScaleId="y"
                        style={{ strokeStyle: "blue", lineWidth: 2 }}
                    />
                    <ChartAreaInteractions>
                        <Tooltip setCursor={setCursor} />
                    </ChartAreaInteractions>
                    <XTicks scaleId="t" ticks={makeTimeTicks({})} />
                    <YTicks scaleId="y" ticks={makeLinearTicks()} />
                </CanPlot>
            </div>
        );
    },
};

