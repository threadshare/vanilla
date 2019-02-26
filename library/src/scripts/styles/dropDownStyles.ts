/*
 * @author Stéphane LaFlèche <stephane.l@vanillaforums.com>
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import { debugHelper } from "@library/styles/styleHelpers";
import { style } from "typestyle";
import { layoutVariables } from "@library/styles/layoutStyles";

export function dropDownClasses(theme?: object) {
    const layoutVars = layoutVariables(theme);
    const debug = debugHelper("dropDown");

    const paddedList = style({
        paddingTop: layoutVars.gutter.quarterSize,
        paddingBottom: layoutVars.gutter.quarterSize,
        ...debug.name("paddedList"),
    });

    return { paddedList };
}
