/**
 * @author Adam Charron <adam.c@vanillaforums.com>
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license http://www.opensource.org/licenses/gpl-2.0.php GNU GPL v2
 */

import { Configuration } from "webpack";
import { getHotEntries } from "./addonUtils";
import { makeBaseConfig } from "./makeBaseConfig";

export async function makeDevConfig(section: string) {
    const baseConfig: Configuration = (await makeBaseConfig(section)) as any;
    const forumEntries = await getHotEntries(section);
    baseConfig.mode = "development";
    baseConfig.entry = forumEntries;
    baseConfig.output = {
        filename: `forum-hot-bundle.js`,
        chunkFilename: "[name].chunk.js",
        publicPath: `http://localhost:3030/`,
    };
    baseConfig.optimization = {
        splitChunks: false,
    };

    return baseConfig;
}
