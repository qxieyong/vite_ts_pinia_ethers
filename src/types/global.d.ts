import { ComponentCustomProperties } from "vue";
import type Message from "@/utils/ElementUIMsg";
import { CommonType } from '@/utils/common';


declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		$message: typeof Message;
		$common: CommonType;
	}
}
