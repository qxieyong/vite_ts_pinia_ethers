import type { CommonType } from "@/utils/common";
import type Message from "@/utils/ElementUIMsg";

declare module "vue" {
	interface ComponentCustomProperties {
		$message: typeof Message;
		$common: CommonType;
	}
}