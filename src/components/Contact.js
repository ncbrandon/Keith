import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Text, Section } from "@quarkly/widgets";
const defaultProps = {
	"padding": "80px 0",
	"sm-padding": "40px 0"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"as": "h2",
			"font": "--headline1",
			"md-font": "--headline2",
			"margin": "20px 0 0 0",
			"text-align": "center",
			"children": <>
				Keith Buff
				<br />
				Water Treatment Conultation and Leak Detection Services
			</>
		}
	}
};

const Contact = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" align-items="center" />
		<Text {...override("text")} />
		{children}
	</Section>;
};

Object.assign(Contact, { ...Section,
	defaultProps,
	overrides
});
export default Contact;