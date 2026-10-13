/** @vitest-environment jsdom */

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { SelectMode } from "@/components/setup";
import {
    GITHUB_REPO_URL,
    PRESENTATION_VIDEO_URL,
} from "@/components/setup/SelectMode";
import { gameModeOptions } from "@/types/gameMode";

describe("SelectMode", () => {
    afterEach(cleanup);

    it("reports the chosen game mode", () => {
        const onNext = vi.fn();

        render(<SelectMode onNext={onNext} />);

        for (const { value, label } of gameModeOptions) {
            fireEvent.click(screen.getByRole("button", { name: label }));
            expect(onNext).toHaveBeenLastCalledWith(value);
        }
        expect(onNext).toHaveBeenCalledTimes(gameModeOptions.length);
    });

    it("links to the GitHub repository and presentation video in a new tab", () => {
        render(<SelectMode onNext={vi.fn()} />);

        const github = screen.getByRole("link", { name: "GitHub" });
        const video = screen.getByRole("link", { name: "Presentation Video" });

        expect(github).toHaveProperty("href", GITHUB_REPO_URL);
        expect(video).toHaveProperty("href", PRESENTATION_VIDEO_URL);

        for (const link of [github, video]) {
            expect(link.getAttribute("target")).toBe("_blank");
            expect(link.getAttribute("rel")).toContain("noopener");
        }
    });
});
