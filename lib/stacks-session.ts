import { AppConfig, UserSession } from "@stacks/auth";

const appConfig = new AppConfig(["store_write", "publish_data"]);

export const stacksUserSession = new UserSession({ appConfig });
